"use client";
import React, { useState } from "react";
import {
  MdHome,
  MdLibraryBooks,
  MdEqualizer,
  MdExitToApp,
  MdAccountCircle,
  MdLiveHelp,
} from "react-icons/md";
import Image from "next/image";
import Logo from "../../public/Images/logo.png";
import "../styles/dashboard.css";
import Link from "next/link";

interface SideMenu {
  title: string;
  icon: JSX.Element;
  path: string;
}

interface SideMenuProps {
  list: SideMenu[];
}

const Sidebar: React.FC<SideMenuProps> = ({ list }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const SideList: SideMenu[] = [
    {
      title: "Home",
      icon: <MdHome />,
      path: "/",
    },
    {
      title: "Library",
      icon: <MdLibraryBooks />,
      path: "/library",
    },
    {
      title: "Analysis",
      icon: <MdEqualizer />,
      path: "/analysis",
    },
    {
      title: "Account",
      icon: <MdAccountCircle />,
      path: "/account",
    },
  ];

  return (
    <div className="relative w-[100%] hidden lg:block">
      <section
        className={`background h-screen duration-300 ${
          hovered ? "w-60 rounded-tr-xl rounded-br-xl" : "w-[50px]"
        } p-3 pt-[25px]`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <span className="flex flex-row justify-start align-start">
          <Image
            src={Logo}
            alt="logo.png"
            width={300}
            height={200}
            className="w-[20px] block float-left h-[30px]"
          />
          <h1
            className={`m-0 flex justify-center align-middle text-center text-white text-[1.5em] pl-2 ${
              hovered ? "scale-100" : "scale-0"
            } duration-100`}
          >
            reeviah
          </h1>
        </span>
        <ul
          className={`${
            hovered ? "mt-[40px]" : "mt-[40px]"
          } flex flex-col justify-start align-start gap-[30px]`}
        >
          {list.map((item, i) => (
            <li key={i} className="flex justify-start align-middle">
              <span className="py-2 text-[25px] text-white">{item.icon}</span>
              <Link
                className={`px-4 py-2 rounded hover:bg-white color-purple w-[80%] ${
                  hovered ? "scale-100 ml-[5px] cursor-pointer" : "scale-0"
                } duration-100`}
                href={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <span className="flex justify-start align-middle mt-[180px] mb-[20px]">
            <span className="py-2 text-[25px] text-white">
              <MdExitToApp />
            </span>
            <h3
              className={`px-4 py-2 rounded hover:bg-white color-purple w-[80%] ${
                hovered ? "scale-100 ml-[5px] cursor-pointer" : "scale-0"
              } duration-100`}
            >
              Logout
            </h3>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
