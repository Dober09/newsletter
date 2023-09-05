import mobileimg from '../assets/illustration-sign-up-mobile.svg';
import desktopimg from '../assets/illustration-sign-up-desktop.svg'
import check from '../assets/icon-success.svg';
import { useState } from 'react';
import Success from './Success';
export default function Section(){
    const [emails,setEmails] = useState(null);

    const handleSubmit = (e)=>{
        e.preventDefault()
        const email = document.querySelector('#email')
        const label = document.querySelector(".error")
        
        
        if(!email.value.includes("@") || !email.value.includes(".")){
    
           label.classList.add('errormsg')
           email.classList.add('errorinput')
           console.log("hello")
        }else{
            setEmails(email.value)
            return <Success email={emails}/>;
        }
    }   
    return (
        <section className='flex justify-center font-roboto  ' >
            <div className='md:flex md:items-center md:justify-between md:bg-white rounded-md  md:w-2/4 md:my-10 md:p-4'>
            <div className='order-2'>
                <img src={mobileimg} alt="mobile-signup"  className='w-80 ml-4 md:hidden' />
                <img src={desktopimg} alt="desktop-signup"  className=' hidden md:block md:h-3/4 md:w-72' />
            </div>
            <div className='  w-72 mx-auto md:mr-32 '>
            <div className='  pt-5 pl-3'>
                <div className='md:text-center'>
                    <h1 className='text-4xl font-bold text-charcoalgray'>Stay updated!</h1>
                </div>
                <div className='w-80  mt-2'>
                    <p>Join 60,000+ product managers reciving monthly updates on:</p>
                </div>
            </div>
            <div className='w-80 ml-3 mt-4 md:w-96 '>
                <div className='box'>
                    <div>
                        <img src={check} alt="tick" />
                    </div>
                    <div className='w-72 md:mr-16'>
                        <p>Product discovery and building what matters</p>
                    </div>
                </div>
                <div className='box'>
                    <div >
                        <img src={check} alt="tick" />
                    </div>
                    <div className='w-72 md:mr-16'>
                        <p >Measuring to ensure updates are a success</p>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <img src={check} alt="tick" />
                    </div>
                    <div className='w-72  md:mr-16'>
                        <p>And much more!</p>
                    </div>
                </div>
            </div>
            <div className='ml-3 mt-4 w-72'>
                <form onSubmit={handleSubmit}>
                    <div className='text-sm flex justify-between '>

                    <label 
                    className='font-bold  '>Email address</label>
                    <label className="error text-red-700 font-ubuntu hidden" > Valid email required</label>
                    </div>
                    <input
                    className="block rounded-md border mt-1 border-gray w-72 p-2" 
                    type="text" 
                    placeholder='email@company.com'
                    id='email'
                    />
                    <button
                  
                    type='submit'
                     className="block border-none bg-charcoalgray p-2 rounded-md mt-4 w-72 font-bold  text-white hover:bg-tomato  hover:shadow-lg"
                     >Subscribe to monthly newsletter</button>
                    
                </form>
            </div>
            </div>
            </div>
        </section>
    )
}