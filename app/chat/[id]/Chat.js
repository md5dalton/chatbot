"use client"

import UList from "@/components/UList"
import Message from "./Message"

export default () => (
    <UList
        className="pb-4"
        items={[]}
        itemHandler={msg => <Message {...msg} botMessage={msg.user.name != "majara"} />}
    />
)