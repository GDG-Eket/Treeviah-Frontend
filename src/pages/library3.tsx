import React from "react";
import Sidebar from "../app/components/sidebar";
import Navbar from "../app/components/navbar";
import LibraryPage3 from "../app/components/librabryPage3";
import FooterBar from "../app/components/Footer";
import {
  MdHome,
  MdLibraryBooks,
  MdEqualizer,
  MdExitToApp,
  MdAccountCircle,
  MdLiveHelp,
} from "react-icons/md";

export const sideMenuList = [
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

const Analysis: React.FC = () => {
  
  return (
    <>
      <Navbar />
      <div className="flex gap-12">
        <Sidebar list={sideMenuList} />
       <div className="max-w-[72%] w-full ml-[270px] pt-6">
       <a href="" className="text-primary-light text-[11px] font-semi-bold">
        Go back
      </a>
      <h3 className="py-2 font-bold text-[18px]">Questions</h3>
        <LibraryPage3 />
        </div>
      </div>
    </>
  );
};

export default Analysis;
