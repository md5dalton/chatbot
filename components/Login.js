import { PlusIcon } from "@heroicons/react/24/outline"
import UList from "./UList"

export default () => (
    <div className="p-2 h-screen bg-[#202123] md:min-w-[20rem]">
        <button className="chat-row border border-gray-700">
            <PlusIcon className="h-4 w-4" />
            <p>New Chat</p>
        </button>
        {/* model selector */}
        {/* chat list */}
    </div>
)