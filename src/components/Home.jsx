import React from 'react'
// import { HiArrowNarrowRight } from 'react-icons/hi'
// import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name ='home' className='w-full h-screen bg-[#1F375d]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#addfde] font-bold'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>ERMIE LOU PEREGRINE CAMPOS BONGABONG</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#addfde]'>Software Developer | Graphic Designer | Web Designer </h2>
            <p className='text-[#ccd6f6] py-4 max-w[700px] '>I have done quite a bit of programming in our province by using VB.Net language with database management for MYSQL. I also love to create Graphic Designs using Photoshop and Illustrator, Web Development using WordPress, HTML, CSS, and REACT also some Data Entries. I will work self-directed and figure things out whenever possible. I want a full-time job.</p>
            <div>
            <button className='items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group'><span classname="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span><span classname="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">View Work</span></button>
            </div>
        </div>
    </div>
  )
}

export default Home