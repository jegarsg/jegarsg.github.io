// WeatherBackground.tsx

import React from 'react'

export default function WeatherBackground({ condition }: { condition: string | undefined }) {
  if (!condition) return null

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {/* Rain Animation */}
      {condition.toLowerCase().includes('rain') && <Rain />}
      {/* Snow Animation */}
      {condition.toLowerCase().includes('snow') && <Snow />}
      {/* Cloud Animation, etc.*/}
      {/* You can add more conditions here */}
    </div>
  )
}

function Rain() {
  return (
    <div className="absolute inset-0">
      {/* Raindrops */}
      {Array.from({ length: 100 }).map((_, i) => (
        <span
          key={i}
          className="absolute bottom-full w-px h-12 bg-blue-500/30 rounded-full animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random()}s`,
            animationDuration: '1.5s',
          }}
        ></span>
      ))}
    </div>
  )
}

function Snow() {
  return (
    <div className="absolute inset-0">
      {/* Snowflakes */}
      {Array.from({ length: 100 }).map((_, i) => (
        <span
          key={i}
          className="absolute bottom-full w-2 h-2 rounded-full bg-gray-100/80 animate-fall-snow"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random()}s`,
            animationDuration: '5s',
          }}
        ></span>
      ))}
    </div>
  )
}
