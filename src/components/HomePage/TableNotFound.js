import React from 'react'
import { Link } from 'react-router-dom'


function TableNotFound() {
  return (
    <>
            <div style={{ width: '100%', height: '100%' }}>


                <div className="container mt-4 mb-4">
                    <div className="card mx-auto">
                        {/* <div>
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/party-popper_1f389.gif" className="mx-auto d-block mt-3 h-25 w-25" />
                        </div> */}
                        <div className="error mx-auto" data-text="404">40</div>

                        <div className="mt-5">
                            <h3 className="text-center" style={{ color: 'black' }}>Sorry Table Not Found</h3>
                            <p className="text-center" >Try to scan QR code again properly</p>
                            <p className="text-center" >OR this table link is not valid</p>
                        </div>

                        <div className="container mt-3 text-center">
                            {/* <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                View Order Details
                            </button>
                            <div class="collapse" id="collapseExample">
                                <div class="card mt-2">
                                    <div className=''>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <Link to='/' className="small m-4 text-center" href="">Back to Home Page</Link>
                    </div>
                </div>



            </div>
        </>
  )
}

export default TableNotFound
