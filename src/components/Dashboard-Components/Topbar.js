import { React, useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { useNavigate, Link } from 'react-router-dom'
import { getQtyAlerts } from '../../services/api.js'


function Topbar() {

  const navigate = useNavigate();
  const [username, setusername] = useState("")
  const [userid, setUserId] = useState("")
  const [alertsQty, setAlertsQTY] = useState([])
  const [alertcount, setAlertCount] = useState(0)

  useEffect(() => {

    const token = localStorage.getItem('token')
    if (token) {
      const user = jwtDecode(token)
      if (!user) {
        localStorage.removeItem('token')
        navigate('/')
      } else {
        const userDetails = localStorage.getItem('username');
        const userDets = JSON.parse(userDetails)
        setusername(userDets.first_name + ' ' + userDets.last_name)
        setUserId((userDets._id))
        console.log('Token matched!!!')
      }
    }
    else {
      navigate('/')
    }

    GetQuantityAlert();
  }, [])

  const logoutUser = () => {
    if (window.confirm('Are you sure you want to Logout ?')) {
      localStorage.removeItem('token');
      navigate('/login')
    } else {
      alert('User in not logout from the system')
    }
  }

  const GetQuantityAlert = async () => {
    const QtyAlert = await getQtyAlerts();
    setAlertsQTY(QtyAlert.data)
    setAlertCount(Number(QtyAlert.data.length))
  }

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <span style={{ fontSize: 20 }}>Dashboard</span>
        {/* Sidebar Toggle (Topbar) */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars" />
        </button>
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          {/* Nav Item - Search Dropdown (Visible Only XS) */}
          <li className="nav-item dropdown no-arrow d-sm-none">
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
          {/* Nav Item - Alerts */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-bell fa-fw" />
              {/* Counter - Alerts */}
              {
                alertcount > 0 ? (<span className="badge badge-danger badge-counter">{alertcount}</span>) : (<></>)
              }
            </a>
            {/* Dropdown - Alerts */}


            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
              <h6 className="dropdown-header">
                Alerts Center
              </h6>

              {
                alertsQty.length > 0 ? (

                  alertsQty.map(item => (
                    <Link className="dropdown-item d-flex align-items-center" to={`/dashboard/editfooditem/${item._id}`}>
                      <div className="mr-3">
                        <div className="icon-circle bg-warning">
                          <i className="fas fa-exclamation-triangle text-white"></i>
                        </div>
                      </div>
                      <div>
                        Quantity Alert: Quantity of <b>{item.Item_Name}</b> is less than 3.
                      </div>
                    </Link>
                  ))
                ) : (
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="mr-3">
                      <div className="icon-circle bg-primary">
                        <i className="fas fa-file-alt text-white"></i>
                      </div>
                    </div>
                    <div>
                      <span className="font-weight-bold">No New Alerts!</span>
                    </div>
                  </a>
                )
              }

            </div>
          </li>
          {/* Nav Item - Messages */}
          <div className="topbar-divider d-none d-sm-block" />
          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small" style={{ fontSize: '14px' }}>{username}</span>
              <i className="fas fa-fw fa-user-circle" />
              {/* <img className="img-profile rounded-circle" src="img/undraw_profile.svg" /> */}
            </a>
            {/* Dropdown - User Information */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <Link className="dropdown-item" to={`/dashboard/editemployee/${userid}`}>
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                Profile
              </Link>
              <div className="dropdown-divider" />
              <button className="dropdown-item" onClick={() => logoutUser()}>
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Topbar
