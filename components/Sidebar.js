"use client"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Chats from "./Chats"
import Controls from "./Controls"

export default ({ toggleHandler }) => (
    <div className="flex items-start">
        <div className="grow bg-[#202123] h-screen p-2 flex flex-col">
            <Chats />
            <Controls />
        </div>
        <div className="p-2">
            <button onClick={toggleHandler} className="p-2"><XMarkIcon className="w-6 h-6" /></button>
        </div>
    </div>
)