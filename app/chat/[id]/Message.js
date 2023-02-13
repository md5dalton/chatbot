import { HandThumbDownIcon, HandThumbUpIcon, PencilIcon } from "@heroicons/react/24/outline"

export default ({ user, message }) => {
    // console.log(message)
    const botMessage = message.user === "chatgpt"

    return (
        <div className={`${!botMessage ? " bg-[#434654]" : ""}`}>
            <div className="flex gap-x-4 p-4 mx-auto max-w-3xl">
                <img
                    className="h-8 w-8"
                    height={32}
                    width={32}
                    src={botMessage ? "/chat.png" : user.image}
                />
                <div className="grow space-y-3">
                    <p className="whitespace-pre-wrap leading-7">{message.text}</p>
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
}