```tsx
'use client'

import { useState, useEffect } from 'react'
import { Shield, Wallet, ArrowUpRight, ArrowDownLeft, Repeat, Settings, Eye, EyeOff, Lock, Zap, TrendingUp, Users, Globe } from 'lucide-react'

export default function PhantomShieldPro() {
  const [isConnected, setIsConnected] = useState(false)
  const [balance, setBalance] = useState('0.00')
  const [showBalance, setShowBalance] = useState(true)
  const [activeTab, setActiveTab] = useState('wallet')

  const [transactions] = useState([
    { id: 1, type: 'received', amount: '+2.5 SOL', from: '7xKX...9mPq', time: '2 min ago', status: 'confirmed' },
    { id: 2, type: 'sent', amount: '-0.8 SOL', to: '4nR2...8kLm', time: '1 hour ago', status: 'confirmed' },
    { id: 3, type: 'swap', amount: '100 USDC → 2.1 SOL', time: '3 hours ago', status: 'confirmed' },
  ])

  const [defiProtocols] = useState([
    { name: 'Raydium', apy: '12.5%', tvl: '$2.1B', icon: '🌊' },
    { name: 'Orca', apy: '8.9%', tvl: '$890M', icon: '🐋' },
    { name: 'Marinade', apy: '6.2%', tvl: '$1.5B', icon: '🥩' },
    { name: 'Jupiter', apy: '15.3%', tvl: '$650M', icon: '🪐' },
  ])

  useEffect(() => {
    if (isConnected) {
      setBalance('12.45')
    }
  }, [isConnected])

  const connectWallet = () => {
    setIsConnected(true)
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setBalance('0.00')
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-white/20">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-purple-400 mr-2" />
              <h1 className="text-3xl font-bold text-white">PhantomShield</h1>
            </div>
            <p className="text-purple-200 text-lg font-medium">Pro</p>
            <p className="text-gray-300 mt-2">Enhanced Security • DeFi Integration</p>
          </div>
          
          <button
            onClick={connectWallet}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Wallet className="w-5 h-5" />
            <span>Connect Wallet</span>
          </button>
          
          <div className="mt-6 space-y-3">
            <div className="flex items-center space-x-3 text-gray-300">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm">Advanced Security Protocols</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Lock className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Multi-Signature Protection</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">Seamless DeFi Integration</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-purple-400" />
            <h1 className="text-xl font-bold text-white">PhantomShield Pro</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-green-500/20 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400 text-sm font-medium">Connected</span>
            </div>
            <button
              onClick={disconnectWallet}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 lg:p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Wallet Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Balance Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">Total Balance</h2>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-white mb-2">
                  {showBalance ? `${balance} SOL` : '••••••'}
                </div>
                <div className="text-gray-400">
                  {showBalance ? `≈ $${(parseFloat(balance) * 98.5).toFixed(2)} USD` : '••••••'}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2">
                  <ArrowDownLeft className="w-4 h-4" />
                  <span>Receive</span>
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>Send</span>
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2">
                  <Repeat className="w-4 h-4" />
                  <span>Swap</span>
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
              <div className="flex border-b border-white/10">
                {[
                  { id: 'wallet', label: 'Wallet', icon: Wallet },
                  { id: 'defi', label: 'DeFi', icon: TrendingUp },
                  { id: 'nfts', label: 'NFTs', icon: Globe },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-purple-400 border-b-2 border-purple-400'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === 'wallet' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
                    {transactions.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            tx.type === 'received' ? 'bg-green-500/20' :
                            tx.type === 'sent' ? 'bg-red-500/20' : 'bg-blue-500/20'
                          }`}>
                            {tx.type === 'received' ? <ArrowDownLeft className="w-5 h-5 text-green-400" /> :
                             tx.type === 'sent' ? <ArrowUpRight className="w-5 h-5 text-red-400" /> :
                             <Repeat className="w-5 h-5 text-blue-400" />}
                          </div>
                          <div>
                            <div className="text-white font-medium">{tx.amount}</div>
                            <div className="text-gray-400 text-sm">{tx.time}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 text-sm font-medium">{tx.status}</div>
                          {(tx.from || tx.to) && (
                            <div className="text-gray-400 text-xs">{tx.from || tx.to}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'defi' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-4">DeFi Protocols</h3>
                    {defiProtocols.map((protocol, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{protocol.icon}</div>
                          <div>
                            <div className="text-white font-medium">{protocol.name}</div>
                            <div className="text-gray-400 text-sm">TVL: {protocol.tvl}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-medium">{protocol.apy}</div>
                          <div className="text-gray-400 text-sm">APY</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'nfts' && (
                  <div className="text-center py-12">
                    <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">No NFTs Found</h3>
                    <p className="text-gray-400">Your NFT collection will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Security Panel */}
          <div className="space-y-6">
            {/* Security Status */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Security Status</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Multi-Sig</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">2FA</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm">Enabled</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Biometric</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Hardware Key</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-yellow-400 text-sm">Optional</span>
                  </div>
                </div