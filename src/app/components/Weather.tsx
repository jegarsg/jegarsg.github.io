import React, { useEffect, useState } from 'react'

interface WeatherProps {
  city: string
}

export default function Weather({ city }: WeatherProps) {
  const [weather, setWeather] = useState<any>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=<your_api_key>&q=${city}`
        )
        if (!res.ok) throw new Error('Weather not found.')
        const data = await res.json()

        setWeather(data)
      } catch (err: any) {
        setError(err.message)
      }
    }

    fetchWeather()
  }, [city])

  if (error) return <div>Error: {error}</div>
  if (!weather) return <div>Loading...</div>

  const condition = weather.current.condition.code.toString()

  return (
    <div className="rounded-2xl p-6 relative overflow-hidden">
      {/* Rain or sunny background */}
      {(condition.startsWith('10') || condition.startsWith('11') || condition.startsWith('12')) && (
        <div className="absolute inset-0 rain-animation z-0" />
      )}

      {condition === '1000' && <div className="absolute inset-0 sunny-animation z-0" />}

      {/* Weather info */}
      <div className="z-10 relative">
        <h3 className="text-2xl font-semibold">Weather</h3>
        <p className="text-gray-900 dark:text-gray-50">{weather.location.name}</p>
        <p className="text-gray-900 dark:text-gray-50">
          {weather.current.temp_c}°C — {weather.current.condition.text}
        </p>
      </div>
    </div>
  )
}
