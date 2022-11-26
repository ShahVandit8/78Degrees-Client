import { React, useState } from 'react'
import './css/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../services/api.js'
import Cookies from 'js-cookie';

function Login() {

  const navigate = useNavigate();

  const defaultValue = {
    email: "",
    password: "",   
}

  const [user, setUser] = useState(defaultValue)

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value})
    console.log(user)
  }   

  const LoginUser = async () => {
    const userloggedin = await loginUser(user);
    const userToken = userloggedin.data;
    const userdetails = userToken.user;
    const usertype = userToken.emptype;
    console.log(userToken.usertoken)

    if(userToken){
    if(userToken.usertoken) {
      localStorage.setItem('token', userToken.usertoken)
      localStorage.setItem('username', JSON.stringify(userdetails))
      console.log(userToken);

      if(usertype === 'manager'){
        alert('Manager Login Successful')
        navigate('/dashboard')
      }
      else if(usertype === 'headchef') {
        alert('Head Chef Login Successful')
        navigate('/headchefdashboard')
      }
      
      // window.location.replace('http://localhost:3000/dashboard');
    }
    else {
      alert('Login Failure')
    }
  }
  else {
    alert('Login Failure')
  }

  }


  return (
    <div id="log">
    <div className="px-4 py-5 px-md-5 text-left text-lg-start mt-5" style={{backgroundColor: '#eee'}}>
      <div className="container">
        <div className="row gx-lg-5 align-items-center pl-0 pl-md-4 ">
          <div className="col-0 col-lg-7 mb-5 mb-lg-0 ">
            <h1 className="my-5 display-3 fw-bold ls-tight">
              Welcome to <br />
              <span style={{color: '#4E73DF', 'font-weight': '400'}}>The New Yorker Cafe</span>
            </h1>
            {/* <p style={{color: 'hsl(217, 10%, 50.8%)'}}>
            An end-to-end, web-based POS that has everything you need to manage your restaurant— online & in-store.
            </p> */}
          </div>
          <div className="col-12 col-lg-5 mb-5 mb-lg-0 px-1 px-md-5">
            <div className="card">
              <div className="card-body py-5 px-md-5">
                <div>
                    <h2 className="mb-2">Login</h2>
                    <p className="mb-5">Please enter your login and password</p>
                  <div className="form-outline mb-5">
                    <input type="email" id="form3Example3" className="form-control" placeholder='Email' required name="email" onChange={(e) => onValueChange(e)}/>
                    {/* <label className="form-label" htmlFor="form3Example3">Email address</label> */}
                  </div>
                  <div className="form-outline mb-5">
                    <input type="password" id="form3Example4" className="form-control" placeholder='Password' required name="password" onChange={(e) => onValueChange(e)}/>
                    {/* <label className="form-label" htmlFor="form3Example4">Password</label> */}
                  </div>
                  <button type="submit" style={{backgroundColor : '#4E73DF', color: 'white'}} className="btn btn-block mb-4" onClick={() => LoginUser()} >
                    Sign up
                  </button>

                  <p className="text-center mt-1" style={{color: 'black', textDecoration: 'none'}}>New ? <Link to="/register" style={{color: '#4E73DF', textDecoration: 'none'}}>Register here</Link></p>
                  {/* <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f" />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google" />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter" />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github" />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
