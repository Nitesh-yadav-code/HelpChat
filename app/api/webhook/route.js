import { StreamChat } from 'stream-chat';
import { clerkClient } from '@clerk/nextjs/server'
const api_key = "uh79xww4bqcb";
const api_secret = "xnsv5xfkzjqza4gmttz2nwhvcg34ky3mbw95fwz2tqhyjag558ukcvru8as5eraa";
// const user_id = "user_2sCJYx6SvqH4MzUXh5GnEhgZAYA";


export async function POST(request) {
  try {
    if (!api_key || !api_secret) {
      throw new Error("Missing API keys for StreamChat.");
    }

    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const body = await request.json();

    if (!body || !body.data || !body.data.id) {
      return new Response(JSON.stringify({ error: "User ID is required" }), { status: 400 });
    }

    const userId = body.data.id;
    const token = serverClient.createToken(userId);

    console.log("New User Token Created:", token);

    // Ensure Clerk user exists
    const user = await clerkClient.users.getUser(userId);
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found in Clerk" }), { status: 404 });
    }

    // Store token in Clerk metadata
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: { token },
    });

    // Give access to discussion channels
    const slugs = [
      "java-discussion-new",
      "python-discussion-new",
      "javascript-discussion-new",
      "ruby-discussion-new",
      "lang-discussion-new",
      "test-discussion-new",
      "go-discussion-new",
    ];

    await Promise.all(
      slugs.map(async (slug) => {
        const channel = serverClient.channel('messaging', slug, {
          image: 'https://getstream.io/random_png/?name=react',
          name: slug.replace("-", " ").toUpperCase(),
          created_by_id: userId,
        });

        await channel.create();
        await channel.addMembers([userId]);
      })
    );

    return new Response(JSON.stringify({ message: 'User registered successfully', token }), {
      status: 200,
    });

  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
