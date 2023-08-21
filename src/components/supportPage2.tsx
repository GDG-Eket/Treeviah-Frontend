import React from 'react'

const SupportPage2 = () => {
  return (
    <section className=' flex gap-0 flex-col h-screen md:pt-8 md:px-20 '>
         <div className='flex justify-between py-5 ml-12 md:ml-0'>
        <h3 className='hidden md:flex text-primary text-[20px] font-semibold'>Privacy setting and tools</h3>
          
           <div className='relative'>
 <div className='relative '>
   <span className=' text-[16px] font-semibold mr-[20px]'>
     Settings
   </span>
   <span className='text-[18px] relative text-primary border-b-4 border-primary z-10'>Privacy Tools</span>
 </div>
 <div className='absolute inset-0 border-b-2 border-zinc-300 transform translate-x-[20px]'></div>
 <div className='absolute inset-0 border-b-2 border-zinc-300 transform -translate-x-[25px]'>
 </div>
</div>
</div>
     
            <div className='flex flex-col gap-2'>
          <h4 className='my-[10px] text-[16px] font-semibold'>Your activity</h4>
            <div className='flex justify-between'>
            <span>who can see your future games?</span>
            <div className='flex justify-between gap-12'>
            <span className='mr-[10px]'>Friends</span>
            <span className='hidden md:flex text-primary'>Edit</span>
            </div>
            </div>
            <div className='flex justify-between'>
            <span>Edit your game audience</span>
            <div className='flex justify-between gap-12'>
            <span className='mr-[10px]'>Private</span>
            <span className='hidden md:flex text-primary'>Edit</span>
            </div>
            </div>
            </div>

            <div className='flex flex-col gap-2 pb-10'>
          <h4 className='my-3 text-[16px] font-semibold'>Your games</h4>
            <div className='flex justify-between'>
            <span>Who can join your games</span>
            <div className='flex justify-between gap-12'>
            <span className='mr-[10px]'>Invite</span>
            <span className='hidden md:flex text-primary'>Edit</span>
            </div>
            </div>
            <div className='flex justify-between'>
            <span>Who can see your friends list</span>
            <div className='flex justify-between gap-12'>
            <span className='mr-[10px]'>Private</span>
            <span className='hidden md:flex text-primary'>Edit</span>
            </div>
            </div>
            </div>

            <div className='md:hidden flex flex-row justify-center items-center gap-[10px] mt-12'>
                <button className='py-[6px] px-[30px] text-primarylight  border bg-white border-primarylight rounded-[10px]'>Cancel</button>
                <button className='py-[6px] px-[33px] bg-primarylight text-white rounded-[10px]'>Edit</button>
            </div>
    
    </section>
  )
}

export default SupportPage2