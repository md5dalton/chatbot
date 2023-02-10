import { TrashIcon } from "@heroicons/react/24/outline"
import ChatButton from "./ChatButton"

export default () => (
    <div className="border-t border-white/30 flex flex-col gap-1 pt-1 pb-2">
        <ChatButton text="Clear converstions">
            <TrashIcon className="h-4 w-4" />
        </ChatButton>
        <ChatButton text="Clear converstions">
            <TrashIcon className="h-4 w-4" />
        </ChatButton>
    </div>
)