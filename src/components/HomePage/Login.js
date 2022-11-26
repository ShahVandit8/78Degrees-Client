import React from 'react'

export default function Login() {
    return (
<div id="log">
        <div className="px-4 py-5 px-md-5 text-left text-lg-start mt-5" style={{backgroundColor: '#eee'}}>
          <div className="container">
            <div className="row gx-lg-5 align-items-center pl-0 pl-md-4 ">
              <div className="col-0 col-lg-7 mb-5 mb-lg-0 ">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  The best option <br />
                  <span style={{color: '#FF3C6A'}}>for your business</span>
                </h1>
                <p style={{color: 'hsl(217, 10%, 50.8%)'}}>
                An end-to-end, web-based POS that has everything you need to manage your restaurant— online & in-store.
                </p>
              </div>
              <div className="col-12 col-lg-5 mb-5 mb-lg-0 px-1 px-md-5">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form>
                        <h2 className="mb-2">Login</h2>
                        <p className="mb-5">Please enter your login and password</p>
                      <div className="form-outline mb-5">
                        <input type="email" id="form3Example3" className="form-control" placeholder='Email address' />
                        {/* <label className="form-label" htmlFor="form3Example3">Email address</label> */}
                      </div>
                      <div className="form-outline mb-5">
                        <input type="password" id="form3Example4" className="form-control" placeholder='Password'/>
                        {/* <label className="form-label" htmlFor="form3Example4">Password</label> */}
                      </div>
                      <button type="submit" style={{backgroundColor : '#FF3C6A', color: 'white'}} className="btn btn-block mb-4">
                        Sign up
                      </button>
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
