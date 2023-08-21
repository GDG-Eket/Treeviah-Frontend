import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <main>
        <div className="w-full h-28- px-8 sm:px-[72px] py-4 sm:py-6 relative bg-white shadow  sm:flex-row justify-start sm:justify-between items-center flex">
          <Link href="/landingPage" className="w-[227px] h-16 relative flex items-center group">
            <Image className='group-hover:animate-pulse w-6 md:w-9 lg:w-full'  src={require("@/../public/Images/t-logo.svg")} alt="t-logo" />
            <div className="left-[33px]- top-0- absolute- text-center text-primary leading-normal md:leading-[56px] lg:leading-[64px] text-[28px] md:text-[48px] lg:text-[56px] font-medium opacity-0- group-hover:opacity-100 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text "><span className='group-hover:text-transparent bg-clip-text'>reeviah</span></div>
          </Link>
          <div className='hidden sm:flex space-x-6 font-poppins text-sm leading-6 text-center'>
            <button className='border border-primary rounded-lg px-6 py-2.5  hover:bg-[#D5AAD5]'>
              <a href='/join-game' className='text-primary hover:text-primary-light'>Join game</a>
            </button>
            <button  className='border border-primary rounded-lg px-6 py-2.5 bg-primary hover:bg-primary-light'>
              <a href='/signup' className='text-white'>Sign Up</a>
            </button>
          </div>
       
        </div>
      </main>
    </div>
  )
}
