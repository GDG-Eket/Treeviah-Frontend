import React from 'react'
import Navbar from '@/app/components/navbar';
import Sidebar from '@/app/components/sidebar';
import LibraryPage2 from '../app/components/libraryPage2';
import { sideMenuList } from './library3';


const Library2 = () => {
  return (
    <>
    <Navbar />
    <div className="flex ">
      <Sidebar list={sideMenuList} />
      <div className='max-w-[90%] w-full ml-40'>
      <LibraryPage2 />
      </div>
    </div>
  </>
  )
}

export default Library2