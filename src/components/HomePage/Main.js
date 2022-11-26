import React from 'react';
import './main.css'
import { NavHashLink } from 'react-router-hash-link';

export default function Main() {

    return (
        <div>
            <main style={{ backgroundColor: '#FF3C6A', color: 'white' }} id="main">
                {/* backgroundColor: '#FF3C6A' */}
                {/* #6E6064 */}
                {/* #2C2928 */}
                {/* #68BAC0 */}
                {/* backgroundColor: '#EFE3DE', */}
                <div className="container py-4 py-sm-5 mx-0 mx-sm-auto ">
                    <div className="row py-4 ">
                        <div className="col-12 col-lg-6 my-5 pt-sm-5 d-flex align-items-center">
                            <div className="my-0 mx-1 mr-1">
                                <img
                                    src="https://i.ibb.co/wpg042p/Blue-Charcoal-Grid-Etsy-Shop-Icon-removebg-preview-1-1.png"
                                    className="img-fluid"
                                    alt=""
                                    style={{height: '100px'}}
                                />
                                {/* <h1 style={{ fontSize: '50px' }}><span style={{ color: 'white' }}> <b> The New Yorker Cafe </b> </span></h1> */}
                                <div className="mx-1 mt-3 mr-1 mt-4">
                                    <p style={{ fontSize: '18px' }} className="mr-5">TNYC is One Of The Most Trusted Cafes in <b><i>Vadodara</i></b> <br /> for locals and out of town visitors. </p>
                                </div>
                                <NavHashLink to="/#services" className="btn mx-1 my-3" style={{ backgroundColor: 'white', color: 'black' }} type="submit">See what we serve</NavHashLink>
                            </div>
                        </div>
                        <div className="col-6 d-sm-none d-none d-lg-block">
                            <div className="d-flex justify-content-center mr-5 mt-5">
                                {/* <img src="https://i.ibb.co/SdZLCGB/ezgif-com-gif-maker-2.png" alt="" className="floating" style={{height : '400px'}} /> */}
                                {/* 'boxShadow': '2.5px 4.33px 15px 0px #eee' */}
                                <div id="carouselExampleSlidesOnly" data-ride="carousel" className="carousel slide floating" style={{ height: '400px' }}>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src="https://i.ibb.co/SdZLCGB/ezgif-com-gif-maker-2.png" alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="https://www.freepnglogos.com/uploads/coffee-png/coffee-east-side-deli-ltd-artisan-delicatessen-organic-15.png" alt="Sixth slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="https://www.pngall.com/wp-content/uploads/2016/05/Burger-Free-Download-PNG.png" alt="Third slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="https://www.freepnglogos.com/uploads/fries-png/premium-french-fries-photos-7.png" alt="Forth slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="https://i.ibb.co/KKxpnK2/ezgif-com-gif-maker-1.png" alt="Second slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="https://www.seekpng.com/png/full/427-4273573_potato-wedges-spicy-wedges-png.png" alt="Fifth slide" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
