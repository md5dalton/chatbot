import { HandThumbDownIcon, HandThumbUpIcon, PencilIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export default ({ user: { avatar }, text, botMessage }) => (
    <div className={`${botMessage ? " bg-[#434654]" : ""}`}>
        <div className="flex gap-x-4 p-4 mx-auto max-w-3xl">
            <Image
                className="h-8 w-8"
                height={32}
                width={32}
                src={avatar}
            />
            <div className="grow space-y-3">
                <p className="whitespace-pre-wrap leading-7">{text}</p>
                <div className={`flex items-center${botMessage ? "" : " justify-end"}`}>
                    {
                        botMessage ? (
                            <>
                                <button className="p-2"><HandThumbUpIcon className="w-5" /></button>
                                <button className="p-2"><HandThumbDownIcon className="w-5" /></button>
                            </>
                        ) : (
                            <button className="p-2"><PencilIcon className="w-5" /></button>
                        ) 
                    }
                </div>
            </div>
        </div>
    </div>
)