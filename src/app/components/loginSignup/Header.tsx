import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <main>
        <div className="w-full h-28- px-8 sm:px-[72px] py-4 sm:py-6 relative bg-white shadow  sm:flex-row justify-start sm:justify-between items-center flex">
          <a href="#" className="w-[227px] h-16 relative flex items-center group">
            {/* <div className="w-[30.85px] h-10 left-0 top-[11px] absolute group-hover:animate-pulse-">
              <div className="w-[10.05px] h-[10.05px] left-[10.05px] top-0 absolute bg-electricblue" />
              <div className="w-[10.05px] h-[10.05px] left-[10.05px] top-[19.90px] absolute bg-teal1" />
              <div className="w-[10.05px] h-[10.05px] left-[10.05px] top-[29.95px] absolute bg-rose1 rounded-bl-[28.14px]" />
              <div className="w-[20.80px] h-[10.05px] left-[10.05px] top-[9.85px] absolute bg-primary" />
              <div className="w-[10.05px] h-[10.05px] left-[20.80px] top-[29.95px] absolute bg-orange1 rounded-full" />
              <div className="w-[10.05px] h-[10.05px] left-[-0px] top-[9.85px] absolute bg-yellow1 rounded-full" />
            </div> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="31" height="40" viewBox="0 0 31 40" fill="none">
              <rect x="10.0508" width="10.0503" height="10.0503" fill="#007BFF"/>
              <rect x="10.0508" y="19.8997" width="10.0503" height="10.0503" fill="#009688"/>
              <path d="M10.0508 29.9498H20.101V40.0001C14.5504 40.0001 10.0508 35.5004 10.0508 29.9498Z" fill="#FD6088"/>
              <rect x="10.0508" y="9.84949" width="20.804" height="10.0503" fill="#800080"/>
              <circle cx="25.8288" cy="34.975" r="5.02513" fill="#FFA500"/>
              <circle cx="5.02513" cy="14.8746" r="5.02513" fill="#FFEE00"/>
            </svg> */}
            <Image className='group-hover:animate-pulse w-6 md:w-9 lg:w-full'  src={require("@/../public/Images/t-logo.svg")} alt="t-logo" />
            <div className="left-[33px]- top-0- absolute- text-center text-primary leading-normal md:leading-[56px] lg:leading-[64px] text-[28px] md:text-[48px] lg:text-[56px] font-medium opacity-0- group-hover:opacity-100 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text "><span className='group-hover:text-transparent bg-clip-text'>reeviah</span></div>
          </a>
          <div className='hidden sm:flex space-x-6 font-poppins text-sm leading-6 text-center'>
            <button className='border border-primary rounded-lg px-6 py-2.5  hover:bg-[#D5AAD5]'>
              <a href='/join-game' className='text-primary hover:text-primary-light'>Join game</a>
            </button>
            <button  className='border border-primary rounded-lg px-6 py-2.5 bg-primary hover:bg-primary-light'>
              <a href='/sign-up' className='text-white'>Sign Up</a>
            </button>
          </div>
       
        </div>
      </main>
    </div>
  )
}
