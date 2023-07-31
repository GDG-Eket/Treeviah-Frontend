import React from 'react'
import Image from 'next/image'
import profileImage from '../../public/Images/one.jpg'

const Profile: React.FC = () => {

    return (
        <div>
           <div className="w-[40px] h-[40px] rounded-full border-2 border-primary flex float-right"> 
                <Image
                    src={profileImage}
                    alt='profile.jpg'
                    width={300}
                    height={200}
                    className="w-[40px] h-[40px] rounded-full"
                />
           </div>
        </div>
    )
}

export default Profile