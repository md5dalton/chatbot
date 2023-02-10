"use client"
import { PlusIcon } from "@heroicons/react/24/outline"
import ChatButton from "./ChatButton"
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
    <div className="grow flex flex-col">
        <ChatButton text="New chat" className="border border-white/30 w-full">
            <PlusIcon className="h-4 w-4" />
        </ChatButton>
        {/* model selector */}
        <UList
            // Implement this overflow correctly
            className="py-3 space-y-2 grow overflow-y-auto"
            items={chats}
            itemHandler={chat => <ChatRow {...chat} />}
        />
    </div>
)