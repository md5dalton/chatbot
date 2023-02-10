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
            itemHandler={info => <p className="p-3 rounded-lg bg-white/5 text-center">{info}</p> }
        />
    </li>
)

export default () => (
    // <ul className="grid grid-cols-3 gap-2 text-center">
    <ul className="grid gap-y-8 pb-4 px-6">
        <Col info={items.examples}>
            <div className="flex items-center justify-center gap-x-2 m-auto">
                <SunIcon className="h-6 w-6" />
                <h2 className="text-lg">Examples</h2>
            </div>
        </Col>
        <Col info={items.examples}>
            <div className="flex items-center justify-center gap-x-2 m-auto">
                <BoltIcon className="h-6 w-6" />
                <h2 className="text-lg">Capabilities</h2>
            </div>
        </Col>
        <Col info={items.examples}>
            <div className="flex items-center justify-center gap-x-2 m-auto">
                <ExclamationTriangleIcon className="h-6 w-6" />
                <h2 className="text-lg">Limitation</h2>
            </div>
        </Col>
    </ul>
)