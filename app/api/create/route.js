import { StreamChat } from 'stream-chat';
import { clerkClient } from '@clerk/nextjs/server'
const api_key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const api_secret = process.env.CLERK_SECRET_KEY;
// const user_id = "user_2sCJYx6SvqH4MzUXh5GnEhgZAYA";



export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Create User Token
  const user = await request.json()
  const token = serverClient.createToken(user.data.id);
  console.log("NEw User Created", token)
  const client = await clerkClient()
  await serverClient.upsertUser({id: user.data.id})

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  })

  //Give access to the user to all channels
  const slugs = ["java-discussion-new", "python-discussion-new", "javascript-discussion-new", "ruby-discussion-new", "lang-discussion-new", "test-discussion-new", "go-discussion-new"]

  slugs.forEach(async (Item)=>{
    const channel = serverClient.channel('messaging', Item, {
      image: 'https://getstream.io/random_png/?name=react',
      name: capitalize(Item),
      created_by_id: user.data.id,
    });

    await channel.create();
    channel.addMembers([user.data.id]);
  })
  return Response.json({ message: 'Hello world' })
}
