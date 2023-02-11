"use client"

import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Modal from "./Modal"
import Sidebar from "./Sidebar"

export default ({ children }) => {

    const [ sidebarOpen, setSidebarOpen ] = useState(true)

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

    return (
        <>
            <Header sidebarToggle={toggleSidebar} />
            <div className="grow overflow-y-auto md:ml-80">
                <Modal isOpen={sidebarOpen}><Sidebar toggleHandler={toggleSidebar} /></Modal>
                <main className="h-full">{children}</main>
            </div>
            <Footer />
        </>
    )
}