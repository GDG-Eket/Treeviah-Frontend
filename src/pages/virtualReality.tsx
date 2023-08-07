import React from "react";
import Sidebar from "../components/organisms/sidebar/sidebar";
import Navbar from "../components/organisms/header/navbar";
import FooterBar from "../components/organisms/footer/Footer";
import {
  MdHome,
  MdLibraryBooks,
  MdEqualizer,
  MdAccountCircle,
} from "react-icons/md";
import Virtual from "@/components/virtual";

const VirtualReality: React.FC = () => {
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
    <div>
      <section className="relative w-full h-auto overflow-hidden">
        <div className="flex flex-row w-full mb-[5%] md:mb-0">
          <div className="w-[50px] hidden md:block">
            <Sidebar list={sideMenuList} />
          </div>
          <div className="w-[100%] flex flex-col justify-between align-middle h-[100vh]">
            <div className="flex flex-col w-[100%] pl-0 md:pl-[10px] lg:pl-[10px] xl:pl-[10px]">
              <Navbar />
            </div>
            <div className="overflow-auto p-4">
              <Virtual />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 md:hidden w-[100%]">
          <FooterBar footer={footerList} />
        </div>
      </section>
    </div>
  );
};

export default VirtualReality;
