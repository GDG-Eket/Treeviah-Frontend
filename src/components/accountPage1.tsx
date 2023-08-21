import React from 'react'
import Image from "next/image";
import prof from "../../public/Images/prof.png";

interface PhotoList {
    id: number;
    url: string;
    text: string;
    alt: string;
  }

const Photo: React.FC = () => {

    const PhotoArray: PhotoList[] = [
        {
          id: 1,
          url: "/../public/Images/acc1.png",
          text: "Chukwukwe",
          alt: "acc1.png",
        },
        {
          id: 2,
          url: "/../public/Images/acc2.png",
          text: "Jeremiah",
          alt: "acc2.png",
        },
        {
          id: 3,
          url: "/../public/Images/acc3.png",
          text: "Grace",
          alt: "acc3.png",
        },
        {
          id: 4,
          url: "/../public/Images/acc4.png",
          text: "Alexis",
          alt: "acc4.png",
        },
        {
          id: 5,
          url: "/../public/Images/acc4.png",
          text: "Alexis",
          alt: "acc5.png",
        },
        {
          id: 6,
          url: "/../public/Images/acc6.png",
          text: "Alexis",
          alt: "acc6.png",
        },
      ];
    
    //   const row1 = PhotoArray.slice(0, 3);
    //   const row2 = PhotoArray.slice(3, 6);

  return (
    <div className='flex flex-col md:flex-row gap-5 md:gap-5 md:w-full md:h-screen md:px-4 mb-[15%] md:pb-[6.5%] '>
      <div className='flex-1 md:w-[29%] md:border border-zinc-300 flex flex-col justify-center items-center px-3 '>
        <div className='py-[20px] md:px-5 md:top-[75px] flex flex-row md:flex-col justify-center md:items-center md:py-20'>
          <div className='w-[90px] md:h-[150px] md:w-[150px]'>
          <Image
            src={prof}
            alt=""
            width={400}
            height={300}
            className=""
          />
          </div>
         <div className='flex flex-col ml-2 items-center'>
          <span className='text-primary text-[20px] font-bold'>UI Dani</span>
          <span className='text-[12px] text-zinc-300 font-semibold md:py-3'>@UIDani_trivisity</span>
          <button className='bg-primary md:p-2 text-white md:w-[310px] w-[120px] h-[37px] pb-[3px] md:h-[40px] rounded-[4px] md:text-[14px] text-[13px] '>personal information</button>
          </div>
          <button className='mt-4 bg-primary p-2 text-white hidden md:flex md:w-[310px] md:h-[40px] rounded-[2px] text-[14px]'>change password</button>
          </div>
      </div>
      <div className='md:w-[65%] flex flex-col md:flex-2 gap-[3px] '>
        <div className='border border-zinc-300 p-5 rounded-[5px]'>
           <h2 className='font-bold text-[20px]'>Bio</h2>
           <span className='text-[14px]'>🎓 Lifelong Learner | 🧠 Curious Mind | 🌍 Global Citizen
Hey there! I'm Samantha, and I'm thrilled to embark on this knowledge-packed journey with all of you. As a self-professed quiz enthusiast, I live for those "aha!" moments when facts and trivia come together to paint a clearer picture of the world.🎓 Lifelong Learner | 🧠 Curious Mind | 🌍 Global Citizen
Hey there! I'm Samantha, and I'm thrilled to embark on this knowledge-packed journey with all of you. As a self-professed quiz enthusiast, I live for those "aha!" moments when facts and trivia come together to paint a clearer picture of the world.</span>
        </div>
        <div className='flex flex-col border border-zinc-300 p-6 mt-[10px] pb-10 rounded-[5px]'>
            <div className='flex justify-between py-4'>
                <span className='text-[18px] font-bold'>Personal Information</span>
                <button className='text-[12px] border border-primarylight h-[30px] w-[60px] rounded-[5px] text-primary'>Edit</button>
            </div>
            <div className='flex flex-col gap-3 text-[14px]'>
            <div className='flex justify-between border-b border-zinc-300'>
                <span className=''>Name</span>
                <span className=''>Daniel Nssien</span>
            </div>
            <div className='flex justify-between border-b border-zinc-300'>
                <span className=''>Email address</span>
                <span className=''>chisomchikwe@gmail.com</span>
            </div>
            <div className='flex justify-between border-b border-zinc-300'>
                <span className=''>Phone Number</span>
                <span className=''>09061150616</span>
            </div>
            <div className='flex justify-between border-b border-zinc-300'>
                <span className=''>Date joined</span>
                <span className=''>12/04/2023</span>
            </div>
        </div>
        </div>
         <div className='hidden md:flex justify-between mt-2'>
            <span className='text-[18px] font-bold'>My Friend</span>
            <span className='text-[16px] text-primary'>see all (3)</span>
         </div>
         <div className='hidden grid-cols-3 md:flex md:flex-row gap-3'>
            {PhotoArray.map((Photo, index) => (
         <span 
            key={Photo.id}
            className='flex flex-wrap items-center justify-center'>
                <div className={`p-[5px] ${index !== PhotoArray.length - 1 ? 'border-2 rounded-full border-dashed border-primary' : 'border border-slate-300'}`}>
            <Image
              src={Photo.url}
              width={70}
              height={50}
              alt='acc.png'
              className=''
                />
                </div>
                  <span className='font-semibold'>{Photo.text}</span>
            </span>
            
           ) )}
           
         </div>
       
      </div>
    </div>
  )
}

export default Photo