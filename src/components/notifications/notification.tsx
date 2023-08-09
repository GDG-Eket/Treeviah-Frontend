import React from 'react'
import { MdMoreVert } from 'react-icons/md'
import Image from 'next/image'
import Notice from '../../../public/Images/noti.png'


const Notification: React.FC = () => {

    return (
        <div>
            <div className="flex flex-col justify-start align-middle p-4 md:px-8 md:py-10 rounded-md border border-purple-300 w-[100%] mt-[30px]">
                <span className="flex justify-between align-middle p-1">
                    <div>
                        <h2 className='text-dark text-[32px] font-semibold'>My Treeviah</h2>
                        <p className="text-gray-400">You have no notification at this moments.</p>
                    </div>
                    <button className="text-[20px]">
                        <MdMoreVert />
                    </button>
                </span>
                <span className="w-100 flex justify-center align-center">
                    <Image src={Notice} alt='notification.png' width={300} height={100} className="w-[100px] h-[100px]" />
                </span>
            </div>
        </div>
    )
}

export default Notification;