import React from 'react'
import Topbar from './Topbar'
// import OrderTicket from './OrderTicket'
import { Outlet } from 'react-router-dom'


function Main() {
    return (
        <>
            {/* <div id="content-wrapper" className="d-flex flex-column">
                <div id="content"> */}
                    <Topbar />
                    
                {/* </div>
            </div> */}
        </>
    )
}

export default Main
