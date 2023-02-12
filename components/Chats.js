"use client"
import { db } from "@/firebase"
import { PlusIcon } from "@heroicons/react/24/outline"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import ChatButton from "./ChatButton"
import ChatRow from "./ChatRow"
import UList from "./UList"

export default () => {

    const { data: session } = useSession()

    const router = useRouter()
    
    const createChat = async () => {

        const doc = await addDoc(
            collection(db, "users", session.user?.email, "chats"),
            {
                userId: session.user?.email,
                created: serverTimestamp()
            }
        )
        
        router.push(`/chat/${doc.id}`)

    }

    const [ chats, loading, error ] = useCollection(session && collection(
        db, "users", session.user?.email, "chats"
    ))

    return (
        <div className="grow flex flex-col">
            <ChatButton onClick={() => createChat()} text="New chat" className="border border-white/30 w-full">
                <PlusIcon className="h-4 w-4" />
            </ChatButton>
            {/* model selector */}
            {error && <p>an error occurered while loading chats</p> }
            {loading && <p>loading</p> }
            { chats && (
                <UList
                        // Implement this overflow correctly
                        className="py-3 space-y-2 grow overflow-y-auto"
                        items={chats ? chats.docs : []}
                        itemHandler={({ id }) => <ChatRow id={id} />}
                        empty={<p className="text-center pt-8">No chats</p>}
                    />
            )}
        </div>
    )
}