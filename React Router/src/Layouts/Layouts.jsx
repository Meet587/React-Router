import React from 'react'
import { Outlet } from 'react-router'

const Layouts = () => {
  return (
    <main className='App'>
      <Outlet />
    </main>
  )
}

export default Layouts