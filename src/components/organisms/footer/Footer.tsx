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
import { styled } from "styled-components";
import Link from "next/link";

interface FooterMenu {
  id: number;
  icon: JSX.Element;
  path: string;
}

interface SideMenuprops {
  footer: FooterMenu[];
}

const FooterBar: React.FC<SideMenuprops> = ({ footer }) => {
  const FooterList: FooterMenu[] = [
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
    <div className="w-[100%] bg-white">
      <div className="grid grid-cols-4 justify-center items-center z-10 p-4">
        {FooterList.map((footer, i) => (
          <Link key={i} href={footer.path} className="text-center self-center items-center justify-center flex">
            <span className="text-primary text-[20px] items-center justify-center">{footer.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterBar;
