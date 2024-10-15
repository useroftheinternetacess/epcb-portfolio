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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti, facilis ipsam dolorem quos voluptatem beatae culpa iure mollitia nemo nam autem molestias doloribus in nisi? Veniam at odit cupiditate!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About