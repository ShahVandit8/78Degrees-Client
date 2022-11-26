import { React, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import Sidebar from '../components/Dashboard-Components/Sidebar'
import Main from '../components/Dashboard-Components/Main'
import Topbar from '../components/Dashboard-Components/Topbar'
import '../components/css/DashboardCSS.css'
import { Outlet, useNavigate } from 'react-router-dom'



function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem('token')
    // console.log(token);
      if (token) {
          // const user = jwt.decode(token)
          const user = jwtDecode(token) 
          if (!user) {
              localStorage.removeItem('token')
              navigate('/')
          }else {
            const userDetails = localStorage.getItem('username');
            const userDets = JSON.parse(userDetails)
            const username = userDets.first_name + ' ' + userDets.last_name;
            console.log('Token matched!!!')
          }
      }
      else {
        navigate('/login')
      }
    }, [])


  return (
    <div>
      <>
      <div id="wrapper">
      <Sidebar />
      <Main />
      </div>
      </>
    </div>
  )
}

export default Dashboard
