"use client"
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline"
import UList from "./UList"

const items = {
    examples : [
        'what is your name',
        'why are you here',
        'what your plan with us'
    ]
}

const Col = ({ children, info }) => (
    <li>
        { children }
        <UList
            className="space-y-2 mt-5"
            items={info}
            itemHandler={info => <p className="p-4 bg-gray-700/50 rounded-lg max-w-xs">{info}</p> }
        />
    </li>
)

export default () => (
    <ul className="grid grid-cols-3 gap-2 text-center">
        <Col info={items.examples}>
            <SunIcon className="h-8 w-8 mx-auto" />
            <h2>Examples</h2>
        </Col>
        <Col info={items.examples}>
            <BoltIcon className="h-8 w-8 mx-auto" />
            <h2>Capabilities</h2>
        </Col>
        <Col info={items.examples}>
            <ExclamationTriangleIcon className="h-8 w-8 mx-auto" />
            <h2>Limitation</h2>
        </Col>
    </ul>
)