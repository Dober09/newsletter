import banner from '../assets/illustration-sign-up-mobile.svg';
import check from '../assets/icon-success.svg';
export default function Section(){
    return (
        <section className='flex justify-center font-roboto  ' >
            <div className='md:flex'>
            <div className='order-2'>
                <img src={banner} alt="mobile-signup"  className='w-80 ml-4' />
            </div>
            <div className='  w-72 mx-auto'>
            <div className='  pt-5 pl-3'>
                <div >
                    <h1 className='text-4xl font-bold text-charcoalgray'>Stay updated!</h1>
                </div>
                <div className='w-80  mt-2'>
                    <p>Join 60,000+ product managers reciving monthly updates on:</p>
                </div>
            </div>
            <div className='w-80 ml-3 mt-4'>
                <div className='box'>
                    <div>
                        <img src={check} alt="tick" />
                    </div>
                    <div className='w-72'>
                        <p>Product discovery and building what matters</p>
                    </div>
                </div>
                <div className='box'>
                    <div >
                        <img src={check} alt="tick" />
                    </div>
                    <div className='w-72'>
                        <p>Measuring to ensure updates are a success</p>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <img src={check} alt="tick" />
                    </div>
                    <div className='w-72 '>
                        <p>And much more!</p>
                    </div>
                </div>
            </div>
            <div className='ml-3 mt-4 w-72'>
                <form>
                    <label 
                    className='font-bold  text-sm'>Email address</label>
                    <input
                    className="block rounded-md border mt-1 border-gray w-72 p-2" 
                    type="email" 
                    placeholder='email@company.com'
                    />
                    <button
                     className="block border-none bg-charcoalgray p-2 rounded-md mt-4 w-72 font-bold  text-white"
                     >Subscribe to monthly newsletter</button>
                </form>
            </div>
            </div>
            </div>
        </section>
    )
}