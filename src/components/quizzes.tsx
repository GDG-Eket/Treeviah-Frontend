import React from 'react'
import '../styles/dashboard.css'
import Line from '../../public/Images/linne.png'
import Image from 'next/image';
import Circle from '../../public/Images/circle.png'
import One from '../../public/Images/one.jpg'
import Two from '../../public/Images/two.jpg'
import Three from '../../public/Images/three.jpg'

const Quizzes: React.FC = () => {

    return (
        <div>
            <div className="flex flex-col justify-start align-middle p-4 md:px-8 md:py-10 rounded-md border border-purple-300 mt-2">
                <span>
                    <h2 className='text-dark text-[32px] font-semibold'>My Treeviah</h2>
                    <line className="w-[100%]">
                        <Image src={Line} alt="line.png" width={300} height={100} className="w-[100%]" />
                    </line>
                </span>
                <span>
                    <div className="flex flex-col mt-4">
                        <button className="text-primary float-right mt-4 flex justify-end align-end">
                            See All(3)
                        </button>
                        <label className="mt-4 w-[100%]">
                            <div className="w-[100%] flex flex-col md:flex-row justify-start align-middle border rounded-md">
                                <div className="backgroundImage w-[100%] p-[40px] md:p-0 md:w-[30%] rounded-md">
                                    <h3 className="text-white bgText">3 Questions</h3>
                                </div>
                                <div className="md:w-[70%] p-3 flex flex-col justify-end align-end">
                                    <h2 className="py-2">Man and Cow</h2>
                                    <div className="flex flex-row justify-between align-middle p-2 rounded-lg bg-gray-100 w-[100%]">
                                        <span className='flex flex-row justify-center align-middle'>
                                            <Image
                                             src={Circle} 
                                             alt="question.jpg" 
                                             width={300} 
                                             height={100} 
                                             className="w-[20px] h-[10px] flex justify-center align-middle mt-2" />
                                            <p>+2 offers</p>
                                        </span>
                                        <span>
                                            5 Joined
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </label>
                        <label className="mt-10 w-[100%]">
                            <div className="w-[100%] flex flex-col md:flex-row justify-start align-middle border rounded-md">
                                <div className="backgroundImage w-[100%] p-[40px] md:p-0 md:w-[30%] rounded-md">
                                    <h3 className="text-white bgText">3 Questions</h3>
                                </div>
                                <div className="md:w-[70%] p-3 flex flex-col justify-end align-end">
                                    <h2 className="py-2">Man and Cow</h2>
                                    <div className="flex flex-row justify-between align-middle p-2 rounded-lg bg-gray-100 w-[100%]">
                                        <span className='flex flex-row justify-center align-middle'>
                                            <Image
                                             src={Circle} 
                                             alt="question.jpg" 
                                             width={300} 
                                             height={100} 
                                             className="w-[20px] h-[10px] flex justify-center align-middle mt-2" />
                                            <p>+2 offers</p>
                                        </span>
                                        <span>
                                            5 Joined
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </label>
                        <label className="mt-10 w-[100%]">
                            <div className="w-[100%] flex flex-col md:flex-row justify-start align-middle border rounded-md">
                                <div className="backgroundImage w-[100%] p-[40px] md:p-0 md:w-[30%] rounded-md">
                                    <h3 className="text-white bgText">3 Questions</h3>
                                </div>
                                <div className="md:w-[70%] p-3 flex flex-col justify-end align-end">
                                    <h2 className="py-2">Man and Cow</h2>
                                    <div className="flex flex-row justify-between align-middle p-2 rounded-lg bg-gray-100 w-[100%]">
                                        <span className='flex flex-row justify-center align-middle'>
                                            <Image
                                             src={Circle} 
                                             alt="question.jpg" 
                                             width={300} 
                                             height={100} 
                                             className="w-[20px] h-[10px] flex justify-center align-middle mt-2" />
                                            <p>+2 offers</p>
                                        </span>
                                        <span>
                                            5 Joined
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                </span>
            </div>
        </div>
    )
};

export default Quizzes;