import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal web',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className='flex flex-col gap-2 h-screen w-screen items-center justify-center'>
            <Navbar />
            <div className='pt-24 flex-grow'>
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
