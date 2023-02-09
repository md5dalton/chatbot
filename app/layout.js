import Sidebar from '@/components/Sidebar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex text-white">
        <aside>
          <Sidebar />
        </aside>
        {/* Client provider */}
        <main className="flex-1 bg-[#343541]">
          {children}
        </main>
      </body>
    </html>
  )
}
