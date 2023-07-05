import { lazy } from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'

const Home = lazy(() => import('./home/Home'))

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
