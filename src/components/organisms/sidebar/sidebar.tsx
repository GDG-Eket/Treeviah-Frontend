"use client";
import React, { useEffect, useState } from "react";
import {
  MdHome,
  MdLibraryBooks,
  MdEqualizer,
  MdExitToApp,
  MdAccountCircle,
  MdLiveHelp,
} from "react-icons/md";
import Image from "next/image";
import Logo from "../../../../public/Images/logo.png";
import "../../../styles/dashboard.css";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

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
  const [active, setActive] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const activeIndex = list.findIndex((item: any) => item.href === pathname);
    setActive(activeIndex);
    console.log(pathname, activeIndex);
  }, [pathname]);

  const handleItemClick = async (index: number) => {
    setActive(index);
    localStorage.setItem("activeIndex", index.toString());
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  // const SideList: SideMenu[] = [
  //   {
  //     title: "Home",
  //     icon: <MdHome />,
  //     path: "/",
  //   },
  //   {
  //     title: "Library",
  //     icon: <MdLibraryBooks />,
  //     path: "/library",
  //   },
  //   {
  //     title: "Analysis",
  //     icon: <MdEqualizer />,
  //     path: "/analysis",
  //   },
  //   {
  //     title: "Account",
  //     icon: <MdAccountCircle />,
  //     path: "/account",
  //   },
  // ];

  return (
<<<<<<< HEAD:src/components/sidebar.tsx
    <div className="relative w-[] hidden md:block">
=======
    <div className="relative w-[100%] hidden lg:block">
>>>>>>> 3c9a369b7040c2b84a9ce2bdf7fbb8ca801df0a4:src/components/organisms/sidebar/sidebar.tsx
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
          {list.map((item, index) => (
            <li key={index} className="flex justify-start align-middle">
              <span className="py-2 text-[25px] text-white">{item.icon}</span>
              <Link
                onClick={() => handleItemClick(index)}
                className={`px-4 py-2 rounded hover:bg-white color-purple w-[80%] ${
                  active === index ? "bg-white color-purple" : ""
                } ${
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
