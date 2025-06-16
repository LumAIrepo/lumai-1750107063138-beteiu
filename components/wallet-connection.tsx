<Thinking>
The user wants a Solana wallet connection component for a React/Next.js app. They've specified:

1. Wallet connection button
2. Display connected wallet address
3. Disconnect functionality
4. Use @solana/wallet-adapter-react
5. Use Tailwind CSS for styling
6. Make it responsive
7. Return ONLY the TypeScript React component code

Since this uses client-side hooks like useState and useEffect (through the wallet adapter), I need to include "use client" at the top.

I'll need to use the Solana wallet adapter hooks:
- useWallet for connection state and methods
- useConnection for the connection object

The component should:
- Show a connect button when not connected
- Show the wallet address and disconnect button when connected
- Handle the connection/disconnection logic
- Be responsive with Tailwind CSS
- Truncate the wallet address for better display

I'll make it a clean, modern-looking component with proper responsive design.
</Thinking>

```tsx
'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useState, useEffect } from 'react'

export default function WalletConnection() {
  const { publicKey, disconnect, connected, connecting } = useWallet()
  const { setVisible } = useWalletModal()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleConnect = () => {
    setVisible(true)
  }

  const handleDisconnect = async () => {
    try {
      await disconnect()
    } catch (error) {
      console.error('Error disconnecting wallet:', error)
    }
  }

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  if (!mounted) {
    return (
      <div className="flex items-center justify-center">
        <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      {connected && publicKey ? (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-800 hidden sm:inline">
              Connected
            </span>
          </div>
          
          <div className="flex items-center gap-2 bg-white rounded-md px-3 py-1 border">
            <span className="text-sm font-mono text-gray-700">
              {truncateAddress(publicKey.toString())}
            </span>
            <button
              onClick={() => navigator.clipboard.writeText(publicKey.toString())}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              title="Copy address"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          <button
            onClick={handleDisconnect}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <span className="hidden sm:inline">Disconnect</span>
            <svg className="w-4 h-4 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          disabled={connecting}
          className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-6 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex items-center gap-2"
        >
          {connecting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="hidden sm:inline">Connecting...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span>Connect Wallet</span>
            </>
          )}
        </button>
      )}
    </div>
  )
}
```