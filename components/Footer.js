import Link from "next/link"
import ChatInput from "./ChatInput"

export default () => (
    <footer className="p-2 border-t border-white/30 bg-inherit md:ml-80">
        <div className="max max-w-3xl mx-auto">
            <ChatInput />
            <p className="text-center text-xs pt-2 pb-3">
                ChatGPT clone app by 
                <Link className="mx-1 underline" href="https://www.twitter.com/md5dalton" prefetch={false}>
                    Majara Mpiti.
                </Link>
                My goal is to improve my fullstack developer skills.
            </p>

        </div>
    </footer>
)