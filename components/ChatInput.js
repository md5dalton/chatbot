"use client"

import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export default () => {

    const [ message, setMessage ] = useState("")
    
    return (
        <form className="p-2 flex items-center gap-x-5 bg-white/5 rounded-md">
            <textarea
                className="grow resize-none outline-none bg-transparent h-6"
                // rows={1}
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
            />
            <button type="submit">
                <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />
            </button>
        </form>
    )
}