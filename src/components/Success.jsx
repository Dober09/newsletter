import React from 'react'
import icon from "../assets/icon-success.svg"

export default function Success({email}) {
  return (
    <div className='w-72 mx-auto my-32 md:bg-white md:p-10 md:w-96 md:rounded-lg md:shadow-lg '>
    <div className='mb-7'>
        <img src={icon} alt="" />
    </div>
    <div className='text-3xl font-bold mb-3'>
        <h1 className='text-charcoalgray'>Thanks for subscribing!</h1>
    </div>
    <div className='w-72'>
        <p className='font-ubuntu'>A confirmation email has been sent to <span className='font-bold'>{email}</span>. Please open it and click the button inside to confirm your subscription</p>
    </div>
    <div className='mt-40 md:m-0'><button className='block border-none bg-charcoalgray p-2 rounded-md mt-4 w-72 font-bold  text-white hover:bg-tomato  hover:shadow-lg'>Dismiss message</button></div>
    </div>
  )
}
