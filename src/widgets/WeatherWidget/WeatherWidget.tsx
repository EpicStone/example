import { useAppSelector } from 'app/store/hooks'
import React, { useEffect, useState } from 'react'

export const WeatherWidget: React.FC = () => {
  const [wData, setWData] = useState<{ list?: { dt_txt?: number }[] } | undefined>(undefined)
  const isMobile = useAppSelector((state) => state.isMobileReducer.isMobile)
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=49.557479&lon=25.599042&cnt=3&units=metric&appid=319db269ba782feb1bbdc1f99ff5346b`,
    )
      .then((res) => res.json())
      .then((data) => setWData(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      Weather widget {`${isMobile}`}
      <div>{wData?.list?.[0].dt_txt}</div>
      <pre>{wData && JSON.stringify(wData, null, 2)}</pre>
    </>
  )
}
