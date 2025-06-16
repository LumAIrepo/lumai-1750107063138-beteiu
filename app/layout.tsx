import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PhantomShield Pro',
  description: 'A Solana wallet application that replicates Phantom's core functionality while incorporating advanced security measures and seamless DeFi protocol integrations for enhanced user protection and decentralized finance accessibility.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {children}
      </body>
    </html>
  )
}