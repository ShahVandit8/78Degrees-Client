import React from 'react'
import '../css/DashboardCSS.css'


function Header() {

  return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light px-2 px-sm-5 container-fluid" style={{ borderBottom: "2px solid blue" }}>
          <div className="container">
            <img src="https://i.ibb.co/QPrqYGh/Blue-Charcoal-Grid-Etsy-Shop-Icon-1-2.png" style={{ height: '40px' }} alt="logo" />
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
