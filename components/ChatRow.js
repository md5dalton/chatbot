"use client"
import { db } from "@/firebase"
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"
import { collection, deleteDoc, doc } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useCollection } from "react-firebase-hooks/firestore"
import NavLink from "./NavLink"

export default ({ id }) => {
    
    const { data: session } = useSession()

    const router = useRouter()

    const [ messages ] = useCollection(session && collection(
        db, "users", session.user?.email, "chats", id, "messages"
    ))

    const message = messages?.docs.pop()?.data().text || "New chat"

    const removeChat = async () => {
        await deleteDoc(doc(db, "users", session?.user.email, "chats", id))
        router.replace("/")
    }

    return (
        <NavLink href={`/chat/${id}`} className="chat-row">
            <ChatBubbleLeftIcon className="h-4 w-4" />
            <p className="grow truncate">{message}</p>
            <TrashIcon onClick={() => removeChat()} className="h-4 w-4 text-gray-700 hover:text-red-700" />
        </NavLink>
    )
}