"use client"

import UList from "@/components/UList"
import Message from "./Message"

const messages = [
    {
        user: {
            name: "majara",
            avatar: "/vercel.svg"
        },
        text: "who are you"
    },
    {
        user: {
            name: "chatgpt",
            avatar: "/next.svg"
        },
        text: "I am your conscience"
    }
]

export default () => (
    <div className="grow">
        <UList
            items={messages}
            itemHandler={msg => <Message {...msg} botMessage={msg.user.name != "majara"} />}
        />
    </div>
)