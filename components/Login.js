"use client"
import { signIn } from "next-auth/react"
import Image from "next/image"

export default () => (
    <div className="h-full bg-[#75aa9d] grid place-content-center">
        <Image
            alt="chatgpt logo"
            src="/chat.png"
            width={300}
            height={300}
        />
        <button 
            onClick={() => signIn("google")}
            className="font-bold text-3xl animate-pulse"
        >Sign in</button>
    </div>
)