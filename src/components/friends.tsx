import React from 'react';
import Image from 'next/image';
import '../styles/dashboard.css'
import add from '../../../public/Images/one.jpg'
import { Md1KPlus } from 'react-icons/md'


interface FriendsList {
    id: number;
    title: string;
    url: string;
    alt: string;
}
const Friends: React.FC = () => {



   const FriendsArray: FriendsList[] = [

    {
        id: 1,
        url: '/../public/Images/one.jpg',
        title: 'Professional',
        alt: 'awardImageOne.jpg'
    },
      {
        id: 2,
        url: '/../public/Images/two.jpg',
        title: 'Professional',
        alt: 'awardImageOne.jpg'
    },
      {
        id: 3,
        url: '/../public/Images/three.jpg',
        title: 'Professional',
        alt: 'awardImageOne.jpg'
    },
      {
        id: 4,
        url: '/../public/Images/four.jpg',
        title: 'Professional',
        alt: 'awardImageOne.jpg'
    },
   ] 

    return (
        <div>
            <section className="w-[100%] lg:w-[90%] mt-[5%] h-[40vh]">
                <span className="w-[100%] flex justify-between align-middle p-2">
                    <h2 className="font-semibold">My Friends</h2>
                    <button className="text-primary">
                        See All(3)
                    </button>
                </span>
                <span className="p-[20px]">
                    <label className="flex flex-row overflow-x-auto scrollbar-hide gap-[50px] p-2 scrollbar-hide">
                        {
                            FriendsArray.map((friends) => (
                               <span key={friends.id} className="px-2 py-4 border rounded-md border-purple-3"> 
                                <span className='p-2 borders rounded-full flex justify-center align-middle self-center w-[90px] h-[90px]'>
                                     <Image
                                        src={friends.url} 
                                        alt={friends.alt} 
                                        width={300} 
                                        height={200} 
                                        className="w-[100%] h-[100%] rounded-full"
                                        />
                                </span>
                                 <p className="capitalized pt-3">{friends.title}</p>
                               </span>
                            ))
                        }
                        <span className="px-2 py-4 border rounded-md border-purple-3"> 
                                <span className='p-2 borders rounded-full flex justify-center align-middle self-center w-[90px] h-[90px]'>
                                     <Md1KPlus className="w-[100%] h-[100%] rounded-full text-gray" />
                                </span>
                                 <p className="capitalized pt-3">Add friends</p>
                        </span>
                     </label>
                </span>
            </section>
        </div>
    )
}

export default Friends;