import React from 'react'
import SideList from '../app/components/sidebar'
import Sidebar from '../app/components/sidebar';

const Library: React.FC = (list) => {
  return (
      <div>
        <div className="flex flex-row relative w-full h-screen overflow-hidden">
          <div className=" w-[50px] hidden md:block ">
            <Sidebar list={SideList} />
          </div>
        </div>
      </div>
  )
}

export default Library;