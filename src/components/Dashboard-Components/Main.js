import React from 'react'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'


function Main() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
        <Topbar />
        <Outlet />
         </div>
    </div>
  )
}

export default Main
