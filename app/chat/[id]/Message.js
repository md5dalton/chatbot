import Image from "next/image"

export default ({ user: { avatar }, text, botMessage }) => (
    <div className={`py-5${botMessage ? " bg-[#434654]" : ""}`}>
        <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
            <Image
                className="h-8 w-8 border border-gray-400 rounded-full"
                height={32}
                width={32}
                src={avatar}
            />
            <p className="pt-1 text-sm">{text}</p>
        </div>
    </div>
)