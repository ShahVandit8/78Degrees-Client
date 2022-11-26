import { React, useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { useNavigate, Outlet } from 'react-router-dom'


function Topbar() {

  const navigate = useNavigate();
  const [username, setusername] = useState("")
  const [userid, setUserId] = useState("")

  useEffect(() => {

    const token = localStorage.getItem('token')
      if (token) {
          const user = jwtDecode(token) 
          if (!user) {
              localStorage.removeItem('token')
              navigate('')
          }else {
            const userDetails = localStorage.getItem('username');
            const userDets = JSON.parse(userDetails)
            // setusername(userDets.first_name + ' ' + userDets.last_name)
            setusername(user.first_name + ' ' + user.last_name)
            setUserId((user.id))
            console.log('Token matched!!!')
          }
      }
      else {
        navigate('/login')
      }
    }, [])

    const logoutUser = () => {
      if (window.confirm('Are you sure you want to Logout ?')) {
        localStorage.removeItem('token');
        navigate('/login')
      } else {
        alert('User in not logout from the system')
      }
    }

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" style={{position: 'fixed', top: 0, zIndex:1, width: '100%'}}>
        <span style={{fontSize: 20, marginLeft: 10}}>Kitchen Order Tickets</span>
        {/* Sidebar Toggle (Topbar) */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars" />
        </button>
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          {/* Nav Item - Search Dropdown (Visible Only XS) */}
          <li className="nav-item dropdown no-arrow d-sm-none">
            {/* <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-search fa-fw" />
            </a> */}
            {/* Dropdown - Messages */}
            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          <div className="topbar-divider d-none d-sm-block" />
          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small" style={{fontSize: '14px'}}>{username}</span>
              <i className="fas fa-fw fa-user-circle" />
            </a>
            {/* Dropdown - User Information */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <button className="dropdown-item" onClick={() => logoutUser()}>
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </button>
            </div>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Topbar
