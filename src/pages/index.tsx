// import { lazy } from "react";
import { Route, Navigate, Routes } from 'react-router-dom'

// const TestPage = lazy(() => import("./test"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Navigate to="/" />
    </Routes>
  )
}