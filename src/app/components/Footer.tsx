"use client"
import React, { useState } from 'react';
import { MdHome, MdLibraryBooks, MdEqualizer, MdExitToApp, MdAccountCircle, MdLiveHelp } from 'react-icons/md'
import { styled } from 'styled-components'
import Link from 'next/link'


interface FooterMenu {
  id: number;
  icon: JSX.Element;
  path: string;
}

type SideMenuprops = {
  footer: FooterMenu[];
};


const FooterBar: React.FC<SideMenuprops> = ({ footer }) => {
 

const FooterList: FooterMenu[] = [
 {
    id: 1,
    icon: <MdHome />,
    path: '/'
  },
  {
    id: 1,
    icon: <MdLibraryBooks />,
    path: '/library'
  },
  {
    id: 1,
    icon: <MdEqualizer />,
    path: '/analysis'
  },
  {
    id: 1,
    icon: <MdAccountCircle />,
    path: '/account'
  }
  ]

  const ListFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;
    box-shadow: 0px -5px 5px whitesmoke;
    gap: 40px;
    list-style: none;
    background-color: white;
    z-index: 10;
  `

  return (
    <div className='bottom-0 left-0 w-[100%]'>
              <ListFooter>
                {FooterList.map((footer) => (
                    <Link key={footer.id} href={footer.path}>
                        <span className="text-primary text-[20px]">{footer.icon}</span>
                    </Link>
                ))}
                </ListFooter>
    </div>
  );
};

export default FooterBar;
