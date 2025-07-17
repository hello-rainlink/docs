import React from 'react';

interface Network {
  networks: string;
  type: string;
  state: string;
  assetBacking: string;
}

interface Column {
  key: keyof Network;
  label: string;
}

export const columns: Column[] = [
  { key: 'networks', label: 'Network Name' },
  { key: 'type', label: 'Type' },
  { key: 'state', label: 'State' },
  { key: 'assetBacking', label: 'Asset Backing' },
];

export const Networks: Network[] = [
  {
    networks: 'Ethereum',
    type: 'L1',
    state: '✅ Active',
    assetBacking: 'ETH、USDT、USDC、WXOC',
  },
  {
    networks: 'Xone',
    type: 'L1',
    state: '✅ Active',
    assetBacking: 'ETH、BNB、TRX、XOC、USDT、USDC',
  },
  {
    networks: 'BNB Smart Chain',
    type: 'L1',
    state: '✅ Active',
    assetBacking: 'BNB、USDT、USDC、WXOC',
  },
  {
    networks: 'Tron',
    type: 'L1',
    state: '✅ Active',
    assetBacking: 'TRX、USDT、WXOC',
  },
];

export default function BridgeNetworks() {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Networks.map((network, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col.key}>{network[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
