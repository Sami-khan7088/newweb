import React from 'react'
import logo from '../Fresher/images/logo.png'
import {FaBars } from "react-icons/fa";
const navbar = () => {
  return (
    <>
      <section className='navbg col-9 mx-auto' >
        <nav className="navbar navbar-expand-lg Navbar ">
          <div className="container-fluid ">
            <img src={logo} alt='img'/>
            <button className="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=" text-dark" ><FaBars/></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <div className="dropdown ">
                    <button  className=" dropdown-toggle anchor" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      About Us
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item " href="#">COMPANY</a></li>
                      <li><a className="dropdown-item" href="#">OUR TEAM</a></li>
                      <li><a className="dropdown-item" href="#">NEWS</a></li>
                      <li><a className="dropdown-item" href="#">INVESTOR</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link active anchor" aria-current="page" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active anchor" aria-current="page" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active anchor" aria-current="page" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default navbar