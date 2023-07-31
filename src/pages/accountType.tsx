import React from "react";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function accountType() {
  return (
    <div className="bg-[#E6CCE6] h-full">
      <header>
        <div className="w-full px-8 sm:px-[72px] py-4 sm:py-6 relative bg-white shadow  sm:flex-row justify-start sm:justify-between items-center flex">
          <Link
            href="/landingPage"
            className="w-[227px] h-16 relative flex items-center group"
          >
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
            <Image
              className="group-hover:animate-pulse w-6 md:w-9 lg:w-full"
              src={require("@/../public/Images/t-logo.svg")}
              alt="t-logo"
            />
            <div className="left-[33px]- top-0- absolute- text-center text-primary leading-normal md:leading-[56px] lg:leading-[64px] text-[28px] md:text-[48px] lg:text-[56px] font-medium opacity-0- group-hover:opacity-100 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text ">
              <span className="group-hover:text-transparent bg-clip-text">
                reeviah
              </span>
            </div>
          </Link>
        </div>
      </header>
      <main className="h-full px-8 md:px-16 lg:px-10 xl:px-[72px] py-16 flex flex-col items-center justify-center">
        <div className="w-full">
          <h1 className="text-primary font-bold text-start text-2xl mb-9">
            Choose account type
          </h1>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-16 justify-center">
            <div className="flex flex-col lg:flex-row  w-fit min-h-max lg:h-[200px]">
              <div className="w-2/5- w-full lg:w-[252px] px-12 xl:px-[70px] py-6 md:py-10 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl bg-orange1 flex items-center justify-center">
                <div className="bg-white md:p-4 p-2 rounded-full flex items-center justify-center">
                  <Image
                    className="text-orange1 w-[40px] md:max-w-[80px]"
                    src={require("../../public/Images/teacher.svg")}
                    alt="educator-icon"
                  ></Image>
                </div>
              </div>
              <div className="w-3/5- w-full h-full md:max-w-[380px] xl:max-w-[380px] rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl py-8 pl-6 bg-white">
                <h2 className="text-2xl text-orange1 w-fit break-normal font-bold mb-4">
                  Educator account.
                </h2>
                <p className="w-[90%] text-gray text-sm leading-6 text-start break-normal">
                  Educators can create quizzes, monitor student progress, and
                  use the platform as an interactive learning tool in their
                  classrooms.
                </p>
              </div>
            </div>
            {/* type2 */}
            <div className="flex flex-col lg:flex-row  w-fit min-h-max lg:h-[200px]">
              <div className="w-2/5- w-full lg:w-[252px] px-12 xl:px-[70px] py-6 md:py-10 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl bg-green1 flex items-center justify-center">
                <div className="bg-white md:p-4 p-2 rounded-full flex items-center justify-center">
                  <Image
                    className="text-green1 w-[40px] md:max-w-[80px]"
                    src={require("../../public/Images/profile.svg")}
                    alt="educator-icon"
                  ></Image>
                </div>
              </div>
              <div className="w-3/5- w-full h-full md:max-w-[380px] xl:max-w-[380px] rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl py-8 pl-6 bg-white">
                <h2 className="text-2xl text-green1 w-fit break-normal font-bold mb-4">
                  Student account.
                </h2>
                <p className="w-[90%] text-gray text-sm leading-6 text-start break-normal">
                  This account type is suitable for individuals who want to take quizzes, learn, and improve their knowledge in various subjects. 
                </p>
              </div>
            </div>
            {/* type3 */}
            <div className="flex flex-col lg:flex-row  w-fit min-h-max lg:h-[200px]">
              <div className="w-2/5- w-full lg:w-[252px] px-12 xl:px-[70px] py-6 md:py-10 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl bg-blue1 flex items-center justify-center">
                <div className="bg-white md:p-4 p-2 rounded-full flex items-center justify-center">
                  <Image
                    className="text-blue1 w-[40px] md:max-w-[80px]"
                    src={require("../../public/Images/personalcard.svg")}
                    alt="educator-icon"
                  ></Image>
                </div>
              </div>
              <div className="w-3/5- w-full h-full md:max-w-[380px] xl:max-w-[380px] rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl py-8 pl-6 bg-white">
                <h2 className="text-2xl text-blue1 w-fit break-normal font-bold mb-4">
                  Personal account.
                </h2>
                <p className="w-[90%] text-gray text-sm leading-6 text-start break-normal">
                Unlock endless quizzes, track progress, compete with others, and personalize your profile with a personal Trivisity account. 
                </p>
              </div>
            </div>
            {/* type4 */}
            <div className="flex flex-col lg:flex-row  w-fit min-h-max lg:h-[200px]">
              <div className="w-2/5- w-full lg:w-[252px] px-12 xl:px-[70px] py-6 md:py-10 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl bg-primary flex items-center justify-center">
                <div className="bg-white md:p-4 p-2 rounded-full flex items-center justify-center">
                  <Image
                    className="text-primary w-[40px] md:max-w-[80px]"
                    src={require("../../public/Images/bitcoin-btc.svg")}
                    alt="educator-icon"
                  ></Image>
                </div>
              </div>
              <div className="w-3/5- w-full h-full md:max-w-[380px] xl:max-w-[380px] rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl py-8 pl-6 bg-white">
                <h2 className="text-2xl text-primary w-fit break-normal font-bold mb-4">
                  Personal account.
                </h2>
                <p className="w-[90%] text-gray text-sm leading-6 text-start break-normal">
                Unlock endless quizzes, track progress, compete with others, and personalize your profile with a personal Trivisity account. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
