"use client"
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline"
import UList from "./UList"

const items = {
    examples : [
        'Explain quantum computing in simple terms',
        'Got any creative ideas for a 10 year old’s birthday?',
        'How do I make an HTTP request in Javascript?'
    ],
    capabilities: [
        "Remembers what user said earlier in the conversation",
        "Allows user to provide follow-up corrections",
        "Trained to decline inappropriate requests"
    ],
    limitations: [
        "May occasionally generate incorrect information",
        "May occasionally produce harmful instructions or biased content",
        "Limited knowledge of world and events after 2021"
    ]
}

const Col = ({ children, info }) => (
    <li>
        { children }
        <UList
            className="space-y-2 mt-5"
            items={info}
            itemHandler={info => <p className="p-3 rounded-lg bg-white/5 text-center">{info}</p> }
        />
    </li>
)

export default () => (
    // <ul className="grid grid-cols-3 gap-2 text-center">
    <ul className="grid gap-y-8 pb-4 px-6 md:grid-cols-3 gap-x-4">
        <Col info={items.examples}>
            <div className="flex items-center justify-center gap-x-2 m-auto">
                <SunIcon className="h-6 w-6" />
                <h2 className="text-lg">Examples</h2>
            </div>
        </Col>
        <Col info={items.capabilities}>
            <div className="flex items-center justify-center gap-x-2 m-auto">
                <BoltIcon className="h-6 w-6" />
                <h2 className="text-lg">Capabilities</h2>
            </div>
        </Col>
        <Col info={items.limitations}>
            <div className="flex items-center justify-center gap-x-2 m-auto">
                <ExclamationTriangleIcon className="h-6 w-6" />
                <h2 className="text-lg">Limitation</h2>
            </div>
        </Col>
    </ul>
)