"use client"

import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export default () => {

    const [ message, setMessage ] = useState("")
    
    return (
        <form className="p-5 flex items-center space-x-5 bg-gray-700/50 text-gray-400 rounded-lg text-sm">
            <input
                className="grow outline-none bg-transparent"
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                type="text"
                placeholder="Type your message here..."
            />
            <button type="submit">
                <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />
            </button>
        </form>
    )
}