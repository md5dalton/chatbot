import Login from '@/components/Login'
import Main from '@/components/Main'
import SessionProvider from '@/context/SessionProvider'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import './globals.css'

export default async function RootLayout({ children }) {

    const session = await getServerSession(authOptions)
    // console.log(session)
    return (
        <html lang="en">
            <head />
            <body className="text-gray-300 bg-[#343541] flex flex-col">
                {session ? (
                    <SessionProvider session={session}>
                        <Main>{children}</Main>
                    </SessionProvider>

                ) : <Login />}
            </body>
        </html>
    )
}