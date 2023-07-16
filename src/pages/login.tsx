import React from 'react';
import Image from 'next/image';

export default function login() {
  return (
    <div>
            <main className='bg-pink-200  h-full pt-16 pb-28 flex justify-center items-center'>
      <div className='h-full inline-flex'>
        <div className='h-full bg-white rounded-l-3xl w-[664px] flex flex-col py-16 justify-center items-center'>
          <h1 className='text-[#800080] w-fit text-[40px] leading-[48px] font-semibold font-dmSans'>Sign In</h1>
          <form className='m-14 gap-8 w-full' action="#" method="post">
            <div className='flex flex-col w-full '>
              <label className='px-1 w-fit ms-3 bg-white translate-y-[50%] text-[#60656F] text-xs font-normal leading-[18px]' htmlFor="name">Name</label>
              <input type="text" id="name" placeholder='Placeholder' className='px-4 py-2 rounded border-[#888B93] border-[1.5px]' value="" required />
            </div>
            <div className='flex flex-col w-full '>
              <label className='px-1 w-fit ms-3 bg-white translate-y-[50%] text-[#60656F] text-xs font-normal leading-[18px]' htmlFor="password">Password</label>
              <input type="password" id="password" placeholder='Placeholder' className='px-4 py-2 rounded border-[#888B93] border-[1.5px]' value="" required />
            </div>
            <div className='flex flex-col w-full mt-8'>
              <button type="submit" className='bg-[#800080] text-white px-6 py-2.5 rounded text-sm hover:bg-[#6a0c6a]'>Sign In</button>
            </div>

          </form>


        </div>
        <div>
          <Image src={require('../../public/images/Frame 4.svg')} alt='hero-img'/>
        </div>
        

      </div>

    </main>
    </div>
  );
};