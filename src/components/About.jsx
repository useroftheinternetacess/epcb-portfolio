import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1F375d] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#addfde]'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Graduated as a <span className=' text-[#addfde]'>BACHELOR OF SCIENCE IN COMPUTER SCIENCE</span></p>
                </div>
                <div>
                    <p>My well-positioned broad-based background positively impact the effectiveness to deliver good work ethics as Software Developer, Graphic Designer and a Web Designer, ability to solve technical issues with utmost accuracy, excellent time management and analytical skills, can work under pressure, able to work abstract concepts and do technical analysis. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About