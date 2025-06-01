import React from 'react'
import { useState } from 'react';
import heroimg from '../assets/heroimg.png';
import logo from "../assets/Group 9282.png";
import filterimage from '../assets/filterimage.png';
import { Link } from 'react-router-dom';






const Navbar = () => {
  
    const [bedrooms, setBedrooms] = useState(0);
  
  
    return (
    <>
    <main className=' bg-no-repeat relative bg-center   bg-fixed bg-cover min-h-screen '>
        <div className=' overflow-x-hidden'>
      <img src={heroimg} alt="hero"  />      
        </div>
        <section className='absolute text-white py-4 px-8 flex items-center justify-between inset-0 my-8 bottom-180'>
            <div className='relative left-20'>
                <img src={logo} alt="" />
            </div>
            <ul className="hidden md:flex items-center gap-8 font-exo text-[#F5F5F5]">
        <li>Home</li>
        <li>Properties</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>

      <div className="flex items-center mr-20 gap-10">
      
        <Link to="/signIn" className='px-10 py-4 border border-white rounded-md hover:bg-white hover:text-[#0D1B39] transition'>
         Signin
        </Link>
        
        <Link to="/signUp" className='px-10 py-4 bg-[#3D9970] text-[#0D1B39] rounded-md hover:bg-[#38b2ac] transition'>
         Login
        </Link>
        </div>
        <div className='absolute top-30 text-white text-center left-42 my-10 font-outfit'>
            <h1 className='text-4xl md:text-6xl tracking-wide font-bold  mx-57 mb-4'>
            Browse Our Properties
            </h1>
            <p className='text-base tracking-widest md:text-2xl'>
            Find your perfect home among our curated properties. Start 
            </p>
            <p className='text-base  md:text-2xl'>
            browsing now!   
            </p>
        </div>

       

        </section>

        <div className=" absolute md:flex left-20 md:flex-row  hidden rounded-md bg-white w-[1188px] bottom-60 md:items-center py-5 gap-6">
        <div className=" gap-6 md:gap-0 md:flex-row mx-30 md:items-center   ">
          <label className="uppercase flex items-center  text-xs h-[35px] font-bold mb-1">Location</label>
          <input
            type="text"
            placeholder="eg. Gbagada"
            className="border-b border-gray-300 outline-none py-1 text-[12px]"
          />
        </div>

        {/* Divider (hidden on small screens) */}
        <div className="hidden md:block h-10 border-r border-gray-300  gap-6"></div>

        {/* Property Type Input */}
        <div className=" gap-6 ">
          <label className="uppercase flex items-center text-[#30343B] text-xs font-bold mb-1">Property Type</label>
          <input
            type="text"
            placeholder="eg. Duplex, Bedroom Flat"
            className="border-b border-gray-300 outline-none py-1 text-[12px]"
          />
        </div>
         

        {/* Divider (hidden on small screens) */}
        <div className="hidden md:block h-10 border-r border-gray-300 mx-10"></div>

        {/* Bedroom Selector */}
        <div className=" flex flex-col ">
          <label className="uppercase text-xs font-bold mb-1 text-[#30343B]">Bedroom</label>
          <div className="flex items-center gap-3 ">
            <button
              onClick={() => setBedrooms(Math.max(0, bedrooms - 1))}
              className="text-lg px-2 text-[12px]"
            >
              −
            </button>
            <span>{bedrooms}</span>
            <button
              onClick={() => setBedrooms(bedrooms + 1)}
              className="text-lg px-2 text-[12px]"
            >
              +
            </button>

             
             
          
        
          </div>
          <div className="md:col-span-1 absolute hidden md:block left-225 md:top-0 top-10 md:bottom-0  bottom-10">
            <h3 className="bg-[#3D9970] text-white w-[293px] px-15 py-[42px] rounded-r-lg hover:bg-green-700 transition">
              Find Property
            </h3>
        
        </div>
           
        </div>
      </div>
    </main>

    <section>
    <div className='px-15 mx-9 hidden md:block'>
      <img src={filterimage} alt="imagef" />
    </div>
    </section>
    
    
    </>
  )
}

export default Navbar