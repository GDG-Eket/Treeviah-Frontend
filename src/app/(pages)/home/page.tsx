"use client";

import React from "react";
import Sidebar from "@/components/organisms/sidebar/sidebar";
import Navbar from "@/components/organisms/header/navbar";
import Dashboard from "@/components/dashboard";
import FooterBar from "@/components/organisms/footer/Footer";
import {
  MdHome,
  MdLibraryBooks,
  MdEqualizer,
  MdExitToApp,
  MdAccountCircle,
  MdLiveHelp,
} from "react-icons/md";

const HomePage: React.FC = () => {
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
      path: "/account",
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
      path: "/account",
    },
  ];

  return (
    <section className="relative w-[100%] h-auto md:h-[100vh] overflow-hidden">
      <div className="flex flex-row relative w-[100%]">
        <div className="hidden md:block">
          <Sidebar list={sideMenuList} />
        </div>
        <div className="w-[100%] flex flex-col justify-between align-middle">
          <div className="flex flex-col w-[100%] fixed">
            <Navbar />
          </div>
          <div className="w-[100%] md:w-auto h-auto md:h-screen overflow-y-auto">
            <Dashboard />
          </div>
        </div>
      </div>
      <div className="h-[50px] relative">
        <div className="md:hidden fixed bottom-0 left-0 w-[100%]">
        <FooterBar footer={footerList} />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
