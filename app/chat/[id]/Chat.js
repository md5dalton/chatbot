"use client"

import UList from "@/components/UList"
import { db } from "@/firebase"
import { collection, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useCollection } from "react-firebase-hooks/firestore"
import Message from "./Message"

export default ({ chatId }) => {

    const { data: session } = useSession()

    const [ messages, loading, error ] = useCollection(session && query(
        collection(db, "users", session?.user?.email, "chats", chatId, "messages"),
        orderBy("created", "asc")
    ))
    
    return (
        <>
            {error && <p>error</p>}
            {loading && <p>loading</p>}
            {messages && (
                <UList
                    className="pb-4"
                    items={messages.docs}
                    empty={<p>no messages</p>}
                    itemHandler={msg => <Message user={session.user} message={msg.data()} />}
                />
            )}
        </>
    )
}