import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const editIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
  >
    <path
      d="M4.5 20H8.5L19.7929 8.70708C20.1834 8.31655 20.1834 7.68339 19.7929 7.29286L17.2071 4.70708C16.8166 4.31655 16.1834 4.31655 15.7929 4.70708L4.5 16V20Z"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 8L16.5 12"
      stroke="#333333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const previewIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z"
      fill="#800080"
    />
    <path
      d="M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z"
      fill="#800080"
    />
  </svg>
);

export default function HostHeader() {
  const [quizTitle, setQuizTitle] = useState("Untitled");
  const titleRef = useRef<any>(null);
  return (
    <div className="w-full h-28- px-8 py-4 sm:py-3 relative bg-white shadow  sm:flex-row justify-start sm:justify-between items-center flex">
      <Link
        href="/"
        className="w-[227px] h-16 relative flex items-center group"
      >
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
      <div className="flex justify-center items-center">
        <h2>Classic Mode / </h2>
        <input
          ref={titleRef}
          type="text"
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
          className="border-none w-28 px-2 mx-1"
        />{" "}
        <span
          className=" cursor-pointer"
          onClick={() => titleRef.current.focus()}
        >
          {editIcon}
        </span>
      </div>
      <div className="hidden sm:flex space-x-6 font-poppins text-sm leading-6 text-center">
        <button>{previewIcon}</button>
        <button className="border font-medium border-primary rounded-lg px-6 py-2.5 hover:bg-[#D5AAD5] text-primary hover:text-primary-light">
          Save Game
        </button>
        <button className="border font-medium bg-primary text-white border-primary rounded-lg px-12 py-2.5 hover:bg-[#D5AAD5] hover:text-primary-light">
          Play
        </button>
      </div>
    </div>
  );
}
