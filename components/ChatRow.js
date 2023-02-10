import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"
import NavLink from "./NavLink"

export default ({ id, message }) => (
    <NavLink href={`/chat/${id}`} className="chat-row">
        <ChatBubbleLeftIcon className="h-4 w-4" />
        <p className="grow truncate">{message}</p>
        <TrashIcon className="h-4 w-4 text-gray-700 hover:text-red-700" />
    </NavLink>
)