"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default ({ children, ...props }) => {
    const pathname = usePathname()
    const active = pathname.includes(props.href) 

    return (
        <Link {...props} active={active && "true"} >
            {children}
        </Link>
    )
}