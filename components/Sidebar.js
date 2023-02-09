"use client"
import { PlusIcon } from "@heroicons/react/24/outline"
import ChatRow from "./ChatRow"
import UList from "./UList"

const chats =[
    {
        id: 1,
        message: "hello dalton"
    },
    {
        id: 2,
        message: "hello reamo"
    },
    {
        id: 1,
        message: "hello adi"
    }
]

export default () => (
    <div className="p-2 h-screen bg-[#202123] md:min-w-[10rem]">
        <button className="chat-row border border-gray-700 w-full justify-center">
            <PlusIcon className="h-4 w-4" />
            <p>New Chat</p>
        </button>
        {/* model selector */}
        <UList
            className="pt-2 space-y-2"
            items={chats}
            itemHandler={chat => <ChatRow {...chat} />}
        />
    </div>
)