import subscribe from '../assets/images/subscribe/subscribe.jpeg'
import { FaRegEnvelope } from "react-icons/fa";
const Subscribe = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#F0F8F6] flex flex-col justify-center items-center py-20 order-2 md:order-1">
            <div className=' max-w-[400px] w-full px-3'>
            <div className='flex items-center gap-3 pb-5'>
                <FaRegEnvelope className='text-[32px]'/>
                <p className='text-xs font-poppins leading-[18px]'>Subscribe to get $30 off* <br /> your first order</p>
            </div>
            <form className='flex'>
                <input type="email" placeholder='Enter your email' className='border-[1px] p-2 border-black rounded-s-md outline-none text-sm w-full'/>
                <button type='submit' className='bg-black text-white w-[115px] h-[57px] font-poppins py-2 px-3 border-[1px] border-black rounded-e-md capitalize text-sm'>Submit</button>
            </form>
            </div>
        </div>
        <div className="order-1 md:order-2">
            <img src={subscribe} alt="subscribe-image" className='block w-full h-full'/>
        </div>
    </section>
  )
}

export default Subscribe;