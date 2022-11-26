import React from 'react'
import { NavHashLink } from 'react-router-hash-link';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light px-1 px-sm-5">
                <div className="container">
                <NavHashLink to="/#main"><img src="https://i.ibb.co/QPrqYGh/Blue-Charcoal-Grid-Etsy-Shop-Icon-1-2.png" style={{height : '40px'}} alt="" className="ml-sm-0 ml-2" /></NavHashLink>
                {/* <header className="ml-2" style={{color : 'Black', fontSize : '20px'}}>The New Yorker Cafe</header> */}
                <button className="navbar-toggler mr-sm-0 mr-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-0 mx-sm-auto ml-3 ml-sm-1 my-1 my-sm-0">
                        <li className="nav-item">
                            <NavHashLink className="nav-link smooth-scroll" to="/#main">Home</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink className="nav-link smooth-scroll"  to="/#services">Food</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink className="nav-link smooth-scroll" to="/#about">About Us</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink className="nav-link smooth-scroll"  to="/#contact">Contact</NavHashLink>
                        </li>
                    </ul>
                            {/* <button className="btn my-2 my-sm-0 mx-1" type="submit">Login</button> */}
                            {/* <NavHashLink  to="/login#log" className="btn my-2 my-sm-0 mx-1 smooth-scroll" type="submit">Login</NavHashLink> */}
                            {/* <button className="btn btn-red-500 my-2 my-sm-0 mx-1" style={{backgroundColor: '#FF3C6A', color: 'white'}} type="submit">Register</button> */}
                            <NavHashLink  to="/login" className="btn my-2 my-sm-0 mx-1 smooth-scroll" style={{color: 'white', width: '130px', backgroundColor: '#42A2C3'}} type="submit">Staff Login</NavHashLink>
                </div>
                </div>
            </nav>
        </div>
    )
}
