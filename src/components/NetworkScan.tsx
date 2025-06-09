'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

interface NetworkItem {
  name: string
  logoUrl: string
  scanUrl: string
  websiteUrl: string
}

const networks: NetworkItem[] = [
  {
    name: 'Ethereum',
    logoUrl: '/network/ethereum.svg',
    scanUrl: 'https://etherscan.io',
    websiteUrl: 'https://ethereum.org'
  },
  {
    name: 'Xone',
    logoUrl: '/network/xone.svg',
    scanUrl: 'https://xonescan.com',
    websiteUrl: 'https://www.xone.org'
  },
  {
    name: 'BNB Smart Chain',
    logoUrl: '/network/bsc.svg',
    scanUrl: 'https://bscscan.com',
    websiteUrl: 'https://www.bnbchain.org/en'
  },
  {
    name: 'Tron',
    logoUrl: '/network/tron.svg',
    scanUrl: 'https://tronscan.org',
    websiteUrl: 'https://tron.network/'
  },
]

export default function NetworkScan() {
  const router = useRouter()

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 p-4">
      {networks.map((net) => (
        <div
          key={net.name}
          className="relative bg-base-100 shadow-sm aspect-square rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition"
          onClick={() => router.push(net.scanUrl)}
        >
          {/* <a
            href={net.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="badge badge-secondary absolute top-3 right-3 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            Website
          </a> */}
          <div className="flex items-center justify-center h-full">
            <img
              src={net.logoUrl}
              alt={`${net.name} logo`}
              className="max-w-2/3 max-h-2/3 object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
