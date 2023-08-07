import React from 'react';
import Image from 'next/image';

const FooterLandingPage = () => {
  return (
    <footer className="my-16 px-4 sm:px-[72px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex items-center gap-[1.48] mb-4">
            <Image alt="t-logo" src={require('../../public/Images/t-logo3.svg')}></Image>
            <p className='text-primary text-[38.485px] font-medium leading-[44px]'>reeviah</p>
          </div>
          <div className='flex gap-3 sm:gap-6 lg:gap-12 xl:gap-[72px] flex-wrap sm:justify-center'>
            <div className='flex flex-col gap-6'>
              <h4 className='text-primary text-base font-bold'>Features</h4>
              <div className='flex flex-col font-medium text-gray font-montserrat text-base sm:text-lg leading-loose'>
                <a className=''>Investment</a>
                <a className=''>Spend</a>
                <a className=''>Save</a>
                <a className=''>Budget</a>
                <a className=''>Borrow</a>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <h4 className='text-primary text-base font-bold'>Company</h4>
              <div className='flex flex-col font-medium text-gray font-montserrat text-base sm:text-lg leading-loose'>
                <a className=''>Blog</a>
                <a className=''>Press</a>
                <a className=''>Join our team</a>
                <a className=''>About Us</a>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <h4 className='text-primary text-base font-bold'>Help</h4>
              <div className='flex flex-col font-medium text-gray font-montserrat text-base sm:text-lg leading-loose'>
                <a className=''>Get Help</a>
                <a className=''>FAQs</a>
                <a className=''>Security</a>
                <a className=''>Contact Us</a>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <h4 className='text-primary text-base font-bold'>Transparency</h4>
              <div className='flex flex-col font-medium text-gray font-montserrat text-base sm:text-lg leading-loose'>
                <a className=''>Terms & Condition</a>
                <a className=''>Privacy Policy</a>
                <a className=''>Information Security</a>
                <a className=''>Policy</a>
                <a className=''>Cookie Policy</a>
                <a className=''>Complaints</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterLandingPage;