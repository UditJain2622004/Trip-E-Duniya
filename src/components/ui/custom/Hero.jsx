import React from 'react'
import { Button } from '../button'
function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[60px] text-center mt-16'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <span className='text-[#f56551]'> Discover your next adventure with AI</span></h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel companion</p>
        <Button>Get Started, It's free</Button>
    
    </div>
  )
}

export default Hero
