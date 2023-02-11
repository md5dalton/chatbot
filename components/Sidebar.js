"use client"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Chats from "./Chats"
import Controls from "./Controls"

export default ({ toggleHandler }) => (
    <div className="flex h-full">
        <div className="bg-[#202123] p-2 flex flex-col w-80">
            <Chats />
            <Controls />
        </div>
        <div className="flex grow p-2 md:hidden">
            <button onClick={toggleHandler} className="flex grow p-2"><XMarkIcon className="w-6 h-6" /></button>
        </div>
    </div>
)