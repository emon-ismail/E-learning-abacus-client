import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Toggle from '../components/Toggle'

const Main = () => {
  return (
    <>
    {/* <Toggle></Toggle> */}
      <Navbar />
      <Outlet />
    </>
  )
}

export default Main
