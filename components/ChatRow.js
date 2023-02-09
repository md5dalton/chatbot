import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"
import NavLink from "./NavLink"

export default ({ id, message }) => (
    <NavLink href={`/chat/${id}`} className="chat-row">
        <ChatBubbleLeftIcon className="h-5 w-5" />
        <p className="grow truncate">{message}</p>
        <TrashIcon className="h-5 w-5 text-gray-700 hover:text-red-700" />
    </NavLink>
)