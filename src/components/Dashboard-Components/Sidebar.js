import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style={{ backgroundColor: '#42A2C3' }}>
        {/* #42A2C3 */}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
          <div className="sidebar-brand-text mx-3">
            <img
              src="https://i.ibb.co/QPrqYGh/Blue-Charcoal-Grid-Etsy-Shop-Icon-1-2.png"
              className="img-fluid"
              alt=""
              style={{ height: '50px' }}
            />
          </div>
        </Link>

        <hr className="sidebar-divider my-1" />

        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span style={{ fontSize: 16 }}>Home</span></Link>
        </li>

        <hr className="sidebar-divider my-1" />


        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#ordermanagement" aria-expanded="true" aria-controls="ordermanagement">
            <i className="fas fa-fw fa-shopping-bag" />
            <span style={{ fontSize: 16 }}>Orders</span>
          </a>
          <div id="ordermanagement" className="collapse" aria-labelledby="ordermanagement" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Select</h6>
              <Link className="collapse-item" to="/dashboard/neworders">New Orders</Link>
              <Link className="collapse-item" to="/dashboard/servedorders">Served Orders</Link>
              <Link className="collapse-item" to="/dashboard/totalorders">Total Orders</Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder" />
            <span style={{ fontSize: 16 }}>Menu</span>
          </a>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/dashboard/fooditemcategory">Food Item Category</Link>
              <Link className="collapse-item" to="/dashboard/fooditemmenu">Food Item Menu</Link>
            </div>
          </div>
        </li>


        <hr className="sidebar-divider my-1" />

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-qrcode" />
            <span style={{ fontSize: 16 }}>Tables</span>
          </a>
          <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link className="collapse-item" to="/dashboard/tablemanagement">Table Management</Link>
              <Link className="collapse-item" to="/dashboard/configuretable">Configure Table</Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/dashboard/employee">
            <i className="fas fa-fw fa-user-circle" />
            <span style={{ fontSize: 16 }}>Staff</span></Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/dashboard/salesbills">
            <i className="fas fa-fw fa-book" />
            <span style={{ fontSize: 16 }}>Sales and Bills</span></Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block my-1" />

      </ul>
    </>
  )
}

export default Sidebar
