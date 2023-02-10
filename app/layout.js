import Main from '@/components/Main'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="text-gray-300 bg-[#343541] h-screen flex flex-col">
        {/* Client provider */}
        <Main>{children}</Main>
      </body>
    </html>
  )
}
                                                                                                                                                                                                               