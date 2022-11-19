import React from 'react'
import Logo from '../assets/images/Kitchen-Diary-alt.png'
import copyright from '../assets/icons/copyright.svg'

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    
    <div className='w-full h-full md:h-[482px] bg-[#F67A24] px-6 lg:px-[100px] md:px-[70px] pb-4 text-white pt-10 md:pt-16'>
      <div className='grid  gap-3 md:gap-4 md:grid-cols-5'>
      <div className='md:col-span-2 flex flex-col gap-1 md:gap-2'>
      <span className='block w-1/2 md:w-full md:py-3'> <img src={Logo} alt='Kitchen Diary' /> </span>
      <span className='text-xs pt-5 md:pt-12'> Get in touch with us </span>
      <span className='text-xs lg:text-base  font-thin'> Subscribe to our Newsletter! </span>
      <input type='text' className='w-3/4 md:w-2/3 mt-3 h-10 md:h-12 p-3 rounded-md placeholder:text-[10px] md:placeholder:text-[14px]' placeholder='Enter your email address'/>
       </div>
       <div className='pt-8 flex flex-col gap-1 md:gap-4 '>
        <span className='text-base lg:text-xl font-bold py-2'>Company </span> 
        <span className='text-xs lg:text-base  '>About Us </span>
        <span className='text-xs lg:text-base  '>Our Offers </span>
        <span className='text-xs lg:text-base  '>Terms of Service </span>
        <span className='text-xs lg:text-base  '>Privacy Policy </span>
        </div>

       <div className='pt-8 flex flex-col gap-1 md:gap-4'>
        <span className='text-base lg:text-xl font-bold py-2'>Resources </span>
        <span className='text-xs lg:text-base  '>Templates </span>
        <span className='text-xs lg:text-base  '>Download</span>
        <span className='text-xs lg:text-base  '>Blog </span>
        <span className='text-xs lg:text-base  '>Testimonals</span>
        </div>
       <div className='pt-8 flex flex-col gap-1 md:gap-4'>
        <span className='text-base lg:text-xl font-bold py-2'> Contact </span>
        <span className='text-xs lg:text-base  '>Contact Us</span>
        <span className='text-xs lg:text-base  '>Help Center</span> </div>
        </div>
        <div className='border-b border-white pt-10 md:pt-20'> </div>
        <div className='flex gap-2 pt-4 md:pt-7 text-sm md:text-base'><img src={copyright} alt='c' /> {year} Kitchen Diary. All rights Reserved</div>
    </div>
  )
}

export default Footer