import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Brain, Home } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neo V6 EA Godmode Final',
  description: 'Enterprise AI Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 border-b border-gray-700 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
                <Home className="w-5 h-5" />
                <span className="font-semibold">Neo V6 EA</span>
              </Link>
              <Link href="/enterprise-ai" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
                <Brain className="w-5 h-5" />
                <span>Enterprise AI</span>
              </Link>
            </div>
            <div className="text-gray-400 text-sm">Godmode Final</div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
