"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default ({ children, className, ...props }) => {
    const pathname = usePathname()
    const active = pathname.includes(props.href) 

    return (
        <Link {...props} className={`${active ? "bg-gray-500/10 " : ""}${className}`} >
            {children}
        </Link>
    )
}