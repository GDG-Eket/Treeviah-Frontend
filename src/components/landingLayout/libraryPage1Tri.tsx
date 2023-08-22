import React from 'react'
import Image from "next/image";
import Plate7 from "../../public/Images/plate7.png"
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi"

const LibraryPage1Tri = () => {
  return (
    <div>
  <div className='flex gap-12 border border-zinc-300'>
   <div className='w-[120px] h-[100px]'>
   <Image
          src={Plate7}
          alt="one.jpg"
          width={300}
          height={200}
          className="w-[100%] h-[100%] object-cover"
        />
   </div>
   <div className='flex flex-col justify-between flex-grow'>
          <div className='flex justify-between'>
            <h3 className='text-4 font-bold'>History of Monalisa</h3>
            <div className='flex gap-[15px] m-3'>
            <span className='text-[14px] font-light'>Edited 18hhrs ago</span>
            <span className='text-[20px] font-semibold'><BiDotsVerticalRounded/></span>
            </div>
          </div>
          <div className='flex justify-between'>
          <div className='flex '>
            <h4 className='text-[16px] font-semibold'>10 Questions</h4>
           <span className='ml-5 text-primary font-semibold text-[18px]'><HiOutlineUserCircle/></span>
            <span className='text-[10px] font-light '>@UIdani_trivisity</span>
            </div>

            <div className='flex gap-4 ml-auto'>
              <span className='text-[16px] font-esmibold'>O plays</span>
              <div className='mx-5'>
                <button className='mr-4 border border-primary text-primary-light text-[11px] px-[18px] py-[3px] bg-white rounded-[5px]'>Edit</button>
                <button className='mr-2 border bg-primary text-white text-[11px] px-[18px] py-[3px] rounded-[5px]'>Start</button>
              </div>
            </div>
          </div>
        </div>

  </div>
  </div>
  
  )
}

export default LibraryPage1Tri