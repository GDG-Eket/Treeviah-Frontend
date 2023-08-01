import React from 'react';
import Image from 'next/image';
import '../styles/dashboard.css'
import Link from 'next/link';



interface AwardContext {
    id: number;
    title: string;
    url: string;
    alt: string;
}
const Awards: React.FC = () => {



   const AwardArray: AwardContext[] = [

    {
        id: 1,
        url: '/../public/images/one.jpg',
        title: 'Professional',
        alt: 'awardImageOne.jpg'
    },
      {
        id: 2,
        url: '/../public/images/two.jpg',
        title: 'Professional',
        alt: 'awardImageOne.jpg'
    },
      {
        id: 3,
        url: '/../public/images/three.jpg',
        title: 'Professional',
        alt: 'awardImageOne.jpg'
    },
      {
        id: 4,
        url: '/../public/images/four.jpg',
        title: 'Professional',
        alt: 'awardImageOne.jpg'
    },
      {
        id: 5,
        url: '/../public/images/five.jpg',
        title: 'Professional',
        alt: 'awardImageOne.jpg'
    },
      {
        id: 6,
        url: '/../public/images/six.jpg',
        title: 'Professional',
        alt: 'awardImageOne.jpg'
    },
      {
        id: 7,
        url: '/../public/images/seven.jpg',
        title: 'Professional',
        alt: 'awardImageOne.jpg'
    },
      {
        id: 8,
        url: '/../public/images/eight.jpg',
        title: 'Professional',
        alt: 'awardImageOne.jpg'
    },
   ] 

    return (
        <div>
            <section className="w-[100%] lg:w-[90%] mt-[8%] h-[40vh]">
                <span className="w-[100%] flex justify-between align-middle p-2">
                    <h2 className="font-semibold text-[32px]">My Awards</h2>
                    <Link href='/award' className="text-primary">
                        See All
                    </Link>
                </span>
                <span className="p-[20px]">
                    <label className="flex flex-row overflow-x-auto scrollbar-hide gap-[50px] p-2 scrollbar-hide">
                        {
                            AwardArray.map((awardlist) => (
                               <span key={awardlist.id} className="px-2 py-4 border rounded-md border-purple-300"> 
                                 <Image src={awardlist.url} alt={awardlist.alt} width={300} height={200} />
                                 <p className="capitalized pt-3">{awardlist.title}</p>
                               </span>
                            ))
                        }
                     </label>
                </span>
            </section>
        </div>
    )
}

export default Awards