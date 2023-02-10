import { Bars3Icon, PlusIcon } from "@heroicons/react/24/outline"

export default ({ sidebarToggle }) => (
    <header className="flex items-center w-full p-3 border-b border-white/30 bg-inherit md:hidden">
        <button onClick={sidebarToggle}>
            <Bars3Icon className="h-6 w-6" />
        </button>
        <p className="grow text-center">New chat</p>
        <button>
            <PlusIcon className="h-6 w-6" />
        </button>
    </header>
)