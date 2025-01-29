import ChatForum from "@/components/ChatForum"
import { currentUser } from '@clerk/nextjs/server'


export default async function Page({ params }) {
    const slug = (await params).slug
    const user = await currentUser()
    return (
        <div>
            <h1>{slug}</h1>
            <ChatForum slug={slug} clerkUser={{id: user.id, name: user.firstName, token: user.publicMetadata.token}} />
        </div>
    )
  }