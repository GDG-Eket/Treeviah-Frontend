"use client";

import FooterBar from "@/components/organisms/footer/Footer";
import AccountPage1 from "@/components/accountPage1";
import { sideMenuList } from "../../../pages/library3";
import Navbar from "@/components/organisms/header/navbar";
import Sidebar from "@/components/organisms/sidebar/sidebar";
import React from "react";
import {
  MdHome,
  MdLibraryBooks,
  MdEqualizer,
  MdExitToApp,
  MdAccountCircle,
  MdLiveHelp,
} from "react-icons/md";

const Account: React.FC = () => {
  const footerList = [
    {
      id: 1,
      icon: <MdHome />,
      path: "/",
    },
    {
      id: 1,
      icon: <MdLibraryBooks />,
      path: "/library",
    },
    {
      id: 1,
      icon: <MdEqualizer />,
      path: "/analysis",
    },
    {
      id: 1,
      icon: <MdAccountCircle />,
      path: "/account",
    },
  ];

  return (
    <section className="relative w-full h-[100%]">
      <div className="flex flex-row relative w-[100%] md:mb-[10%]">
        <div className="hidden md:block">
          <Sidebar list={sideMenuList} />
        </div>
        <div className="w-[100%] flex flex-col justify-between align-middle md:h-[100vh]">
          <div className="flex flex-col w-[100%]">
            <Navbar />
          </div>
          <div className="mb-[50px] md:pt-5 pl-5">
            <AccountPage1 />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 md:hidden w-[100%]">
        <FooterBar footer={footerList} />
      </div>
    </section>
  );
};

export default Account;
