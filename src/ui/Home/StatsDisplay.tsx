'use client'

import React from 'react'
import CountUp from '@components/CountUp'

export default function StatsDisplay() {
  const stats = [
    { label: 'Network Support', value: 4 },
    { label: 'Bridge Token',    value: 7 },
    { label: 'Service Fee(%)',     value: 0.03, decimals: 2 },
    { label: 'Use Times',       value: 1000 }
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4">
      {stats.map((item, i) => {
        const isNumber = typeof item.value === 'number'
        const decimalPart   = isNumber
          ? item.value.toString().split('.')[1] || ''
          : ''
        const decimalPlaces = decimalPart.length

        return (
          <div
            key={i}
            className="flex flex-col items-center rounded-lg p-6"
          >
            <div className="text-3xl font-semibold text-crusta-500 dark:text-crusta-300">
              {isNumber ? (
                <CountUp
                  from={0}
                  to={item.value}
                  decimals={decimalPlaces}
                  separator=","
                  duration={3}
                  className="inline-block"
                />
              ) : (
                item.value
              )}
            </div>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {item.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}
