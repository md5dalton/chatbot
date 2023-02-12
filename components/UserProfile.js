"use client"
import { signOut } from "next-auth/react"

export default ({ image, name }) => (
    <button onClick={() => signOut()} className="chat-row bg-transparent">
        <img className="h-6 w-6 rounded-full" src={image} alt={`${name}'s profile photo`} />
        <p>{name}</p>
    </button>
)