"use client";
import FooterBar from "@/components/organisms/footer/Footer";
import Navbar from "@/components/organisms/header/navbar";
import Sidebar from "@/components/organisms/sidebar/sidebar";
import SupportPage1 from "../../../components/supportPage1";
import React from "react";
import {
  MdHome,
  MdLibraryBooks,
  MdEqualizer,
  MdAccountCircle,
} from "react-icons/md";
const Support: React.FC = () => {
  const sideMenuList = [
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
      path: "/profile",
    },
  ];

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
      path: "/profile",
    },
  ];
  return (
    <section className="relative w-[100%] overflow-hidden">
      <div className="flex flex-row relative w-[100%] mb-[20%] md:mb-0">
        <div className="hidden md:block">
          <Sidebar list={sideMenuList} />
        </div>
        <div className="w-[100%] flex flex-col justify-between align-middle md:h-[100vh]">
          <div className="flex flex-col w-[100%]">
            <Navbar />
          </div>
          <div className="p-3">
            <SupportPage1 />
          </div>
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 w-[100%]">
        <FooterBar footer={footerList} />
      </div>
    </section>
  );
};

export default Support;
