import React from 'react'
import Image from "next/image";
import Plate7 from "../../public/Images/plate7.png"
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi"

const LibraryPage1Tri = () => {
  return (
    
  <div className='flex flex-col md:flex-row gap-5 md:gap-12 border border-zinc-300'>
   <div className='w-full md:w-[120px] md:h-[100px]'>
   <Image
          src={Plate7}
          alt="one.jpg"
          width={300}
          height={200}
          className="w-[100%] h-[100%] object-cover"
        />
   </div>
   <div className='flex flex-col justify-between'>
          <h3 className='text-4 font-bold'>History of Monalisa</h3>
          <div className='flex'>
            <h4 className='text-[14px] font-semi-bold'>10 Questions</h4>
           <span className='ml-5 text-primary font-semibold text-[18px]'><HiOutlineUserCircle/></span>
            <span className='text-[10px] font-light '>@UIdani_trivisity</span>
            </div>
            </div>

        <div className='flex flex-col justify-between md:ml-auto'>
        <div className='flex gap-[15px] m-3'>
            <span className='text-[14px] font-light'>Edited 18hhrs ago</span>
            <span className='text-[20px] font-semibold'><BiDotsVerticalRounded/></span>
            </div>
              <div className='flex gap-[10px] m-3'>
              <span className='text-[12px] font-esmibold'>O plays</span>
                <button className=' border border-primary text-primarylight text-[11px] px-[18px] py-[3px] bg-white rounded-[5px]'>Edit</button>
                <button className=' border bg-primary text-white text-[11px] px-[18px] py-[3px] rounded-[5px]'>Start</button>
              </div>
            </div>

  </div>

  )
}

export default LibraryPage1Tri