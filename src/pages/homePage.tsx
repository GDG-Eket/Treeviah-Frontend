import React from "react";
import Sidebar from '../app/components/sidebar';
import Navbar from '../app/components/navbar';
import Dashboard from '../app/components/dashboard';
import SideList from '../app/components/sidebar'

const HomePage: React.FC = () => {

  return (
    <div className="flex flex-row relative w-full h-screen overflow-hidden">
      <div className=" w-[50px] hidden md:block ">
         <Sidebar list={SideList} />
      </div>
      <div className="w-[100%] flex flex-col justify-between align-middle h-[100vh]">
        <div className="flex flex-col w-[100%] pl-0 md:pl-[50px] lg:pl-[10px] xl:pl-[10px]">
         <Navbar />
        </div>
        <div className="">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;