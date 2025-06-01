import React from "react";
import logo from "../assets/Group 9282.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";





const Footer = () => {
  
  
    return (
    <>
    <main className='bg-[#035A33]  overflow-x-hidden '>
        <div>
        <footer className="footer  font-outfit sm:footer-horizontal text-neutral-content p-10">
  <nav>
    <h6 className=""><img src={logo} alt="" /></h6>
    <a className="">Discover, rent, and find your ideal home hassle-free</a>
    <a className="   ">with BetaHouse. Take control of your rental journey</a>
    <a className=" ">today!</a>
    <div className="flex items-center space-x-2">
  <FaLocationDot className="" />
  <span className="text-sm ">95 Tinubu Estate, Lekki, Lagos</span>
</div>
    
    <div className="flex items-center space-x-2">
  <IoCall className="" />
  <span className="text-sm ">+234 675 8935 675</span>
</div>
<div className="flex items-center space-x-2">
  <TbMailFilled className="" />
  <span className="text-sm ">support@rentbetahouse.com</span>
</div>


    
  </nav>
  <nav className="text-[#FFFFFF] font-outfit">
    <h6 className="  ">Quick Links</h6>
    <a className=" ">Home</a>
    <a className=" ">Properties</a>
    <a className=" ">About</a>
    <a className=" ">Contact Us</a>
    <a className=" ">Blog</a>
  </nav>
  <nav className="text-[#FFFFFF] font-outfit">
    <h6 className=" ">More</h6>
    <a className="">Agents</a>
    <a className="">Affordable Houses</a>
    <a className="">FAQ's</a>
  </nav>

  <nav className="text-[#FFFFFF] font-outfit">
    <h6 className="">Popular Search</h6>
    <a className="">Apartment for sale</a>
    <a className="">Apartment for rent</a>
    <a className="">3 Bedroom flat</a>
    <a className="">Bungalow</a>

   
    
  </nav>

   </footer>
    </div>

    <div className=" text-center text-[#FFFFFF] flex justify-between font-outfit my-40  border-t border-[#6F6F6F">
        &copy; {new Date().getFullYear()} Copyright 2023 Betahouse | Developed by Jay Coker 
        <p>Privacy Policy</p>
      </div>





    </main>


    </>
  )
}

export default Footer

