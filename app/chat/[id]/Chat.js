"use client"

import UList from "@/components/UList"
import Message from "./Message"

const messages = [
    {
        user: {
            name: "majara",
            avatar: "/user.png"
        },
        text: "who are you"
    },
    {
        user: {
            name: "chatgpt",
            avatar: "/chat.png"
        },
        text: "ChatGPT is a conversational AI language model developed by OpenAI. It's a powerful tool trained on a massive amount of text data, which enables it to generate human-like responses to a wide range of questions and prompts. ChatGPT can be used in various applications such as customer support, personal assistants, and chatbots, among others."
    },
    {
        user: {
            name: "majara",
            avatar: "/user.png"
        },
        text: "who are you"
    },
    {
        user: {
            name: "chatgpt",
            avatar: "/chat.png"
        },
        text: "ChatGPT is a conversational AI language model developed by OpenAI. It's a powerful tool trained on a massive amount of text data, which enables it to generate human-like responses to a wide range of questions and prompts. ChatGPT can be used in various applications such as customer support, personal assistants, and chatbots, among others."
    },
    {
        user: {
            name: "majara",
            avatar: "/user.png"
        },
        text: "who are you"
    },
    {
        user: {
            name: "chatgpt",
            avatar: "/chat.png"
        },
        text: "ChatGPT is a conversational AI language model developed by OpenAI. It's a powerful tool trained on a massive amount of text data, which enables it to generate human-like responses to a wide range of questions and prompts. ChatGPT can be used in various applications such as customer support, personal assistants, and chatbots, among others."
    },
]

export default () => (
    <UList
        className="pb-4"
        items={messages}
        itemHandler={msg => <Message {...msg} botMessage={msg.user.name != "majara"} />}
    />
)