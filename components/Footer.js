import Link from "next/link"
import ChatInput from "./ChatInput"

export default () => (
    <footer className="p-2 border-t border-white/30 bg-inherit md:ml-80">
        <div className="max max-w-3xl mx-auto">
            <ChatInput />
            <p className="text-center text-xs pt-2 pb-3">
                ChatGPT clone app by 
                <Link target="_blank" className="mx-1 underline" href="https://www.twitter.com/md5dalton" prefetch={false}>
                    Majara Mpiti.
                </Link>
                I'm a frontend developer with a passion for creating beautiful, responsive web applications.
            </p>

        </div>
    </footer>
)