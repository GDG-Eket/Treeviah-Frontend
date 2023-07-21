import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Dashboard from "../components/dashboard";
import FooterBar from "../components/Footer";
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
    <section className="relative w-full h-[100%] overflow-hidden">
      <div className="flex flex-row relative w-full mb-[30%] md:mb-0">
        <div className="w-[50px] hidden md:block">
          <Sidebar list={sideMenuList} />
        </div>
        <div className="w-[100%] flex flex-col justify-between align-middle h-[100vh]">
          <div className="flex flex-col w-[100%] pl-0 md:pl-[50px] lg:pl-[10px] xl:pl-[10px]">
            <Navbar />
          </div>
          <div>
            <Dashboard />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 md:hidden w-[100%]">
        <FooterBar footer={footerList} />
      </div>
    </section>
  );
};

export default HomePage;
