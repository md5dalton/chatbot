"use client"

import { db } from "@/firebase"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

export default () => {

    const [ message, setMessage ] = useState("")
    const pathname = usePathname()
    const chatId = pathname.split("/").pop()

    const { data: session } = useSession()

    const model = "text-davinci-003"

    const messageHandler = async ev => {
        ev.preventDefault()
        if (!message) return

        const text = message.trim()
        setMessage("")

        const obj = {
            text,
            created: serverTimestamp(),
            user: session?.user.email
        }

        await addDoc(
            collection(db, "users", session?.user.email, "chats", chatId, "messages"),
            obj
        )

        const notification = toast.loading("ChatGPT is thinking")

        await fetch("/api/ask", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                text, chatId, model, session
            })
        })
        .then(() => toast.success("ChatGPT has responded", {id: notification}))
        .catch(err => toast.error("ChatGPT has crapped out", {id: notification}))

    }
    
    return (
        <form onSubmit={messageHandler} className="p-2 flex items-center gap-x-5 bg-white/5 rounded-md">
            <textarea
                className="grow resize-none outline-none bg-transparent h-6"
                // rows={1}
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
            />
            <button type="submit">
                <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />
            </button>
        </form>
    )
}