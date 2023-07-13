import React from 'react';
import Sidebar from '../app/components/sidebar';
import { MdHome, MdLibraryBooks, MdEqualizer, MdExitToApp, MdAccountCircle, MdLiveHelp } from 'react-icons/md'

const Library: React.FC = () => {
  const sideMenuList = [
    {
      title: 'Home',
      icon: <MdHome />,
      path: '/'
    },
    {
      title: 'Library',
      icon: <MdLibraryBooks />,
      path: '/library'
    },
    {
      title: 'Analysis',
      icon: <MdEqualizer />,
      path: '/analysis'
    },
    {
      title: 'Account',
      icon: <MdAccountCircle />,
      path: '/account'
    }
  ];
  return (
      <div>
        <div className="flex flex-row relative w-full h-screen overflow-hidden">
          <div className=" w-[50px] hidden md:block ">
            <Sidebar list={sideMenuList} />
          </div>
          <section className="flex justify-center align-middle bg-purple-400">
            <p>
              hellojvnfjnrijvrjnfirf
              vrnvuriufirfirnirnvinirnivnrf
                vrnvonrijnijrijfirjifnrkvr
            </p>
             <p>
              hellojvnfjnrijvrjnfirf
              vrnvuriufirfirnirnvinirnivnrf
              vrnvonrijnijrijfirjifnrkvr
              rfjnrjnfirifjirjv
            </p>
          </section>
        </div>
      </div>
  )
}

export default Library;