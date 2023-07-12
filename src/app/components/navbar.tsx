"use client"
import React, { useState } from "react";
import { MdSearch, MdMenu, MdNotifications } from 'react-icons/md'

const Navbar: React.FC = () => {

const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div>
         <section className="w-full flex justify-around align-middle px-[20px] py-[10px] shadow-md flex-row">
            <span className="flex flex-row justify-start align-center px-4 py-2 rounded w-[250px]
            md:w-[300px] bg-purple-100">
                <span className="text-[25px] text-gray-400"><MdSearch /></span>
                <input type="text" placeholder="Search here" className="bg-transparent focus:outline-none text-purple-900 w-[100%]" />
            </span>
             <span className={`md:flex justify-start align-center gap-[20px] flex-row hidden `}>
                <button className="px-4 py-2 rounded join-team w-[130px]">Join Game</button>
            <button className="px-4 py-2 rounded host-team w-[150px]">Host</button>
            </span>
            <button className="text-[25px] text-primary block md:hidden">
              <MdNotifications />
            </button>
         </section>
     </div>
    </div>
  );
};

export default Navbar;