import LibraryPage1 from '@/app/components/libraryPage1'
import Navbar from '@/app/components/navbar'
import Sidebar from '@/app/components/sidebar'
import React from 'react'
import { sideMenuList } from './library3';

const Library1 = () => {
  return (
    <>
    <Navbar />
    <div className="flex ">
      <Sidebar list={sideMenuList} />
      <div className='max-w-[90%] w-full ml-60'>
      <LibraryPage1 />
      </div>
    </div>
  </>
  )
}

export default Library1