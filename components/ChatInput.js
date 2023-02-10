"use client"

import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export default () => {

    const [ message, setMessage ] = useState("")
    
    return (
        <form className="p-2 flex items-center gap-x-5 bg-white/5 rounded-md">
            <input
                className="grow outline-none bg-transparent"
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                type="text"
            />
            <button type="submit">
                <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />
            </button>
        </form>
    )
}