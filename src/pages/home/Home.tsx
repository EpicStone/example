import React from 'react'
import { WeatherWidget } from 'widgets/WeatherWidget'

const Home = () => {
  return (
    <div>
      <WeatherWidget />
    </div>
  )
}

export default React.memo(Home)
