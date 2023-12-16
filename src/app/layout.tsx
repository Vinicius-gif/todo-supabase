import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReactQueryClient from './libs/reactQuery/client'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo List'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-lt-installed='true'>
      <body className={inter.className}>
          <ReactQueryClient>
            {children}
          </ReactQueryClient>
      </body>
    </html>
  )
}
