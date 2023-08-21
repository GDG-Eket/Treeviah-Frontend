import React from "react";
import Sidebar from "../components/organisms/sidebar/sidebar";
import Navbar from "../components/organisms/header/navbar";
import LibraryPage3 from "../components/librabryPage3";
import FooterBar from "../components/organisms/footer/Footer";
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
    <div>
      <section className="relative w-full h-[100%] overflow-hidden">
        <div className="flex flex-row relative w-[100%] mb-[30%] md:mb-0">
          <div className="hidden md:block">
            <Sidebar list={sideMenuList} />
          </div>
          <div className="w-[100%] flex flex-col justify-between align-middle h-[100vh]">
            <div className="flex flex-col w-[100%]">
              <Navbar />
            </div>
            <div className="md:px-10 mt-2">
              <div className="pl-2 md:pl-10">
                <h5 className="text-primary text-[12px] font-light mb-5">
                  Go back
                </h5>
                <span className="text-2xl font-bold ">Questions</span>
              </div>
              <LibraryPage3 />
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

export default Analysis;
