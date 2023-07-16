import React from 'react';
import { MdMoreVert } from 'react-icons/md';
import '../../styles/dashboard.css'


const LibraryGrid: React.FC = () => {

    return (
        <div>
            <div className="flex flex-col w-100 p-[40px] justify-start align-middle">
                <div className="">
                    <h1>My Treeviah Library</h1>
                </div>
                <div className="flex w-100 p-2">
                    <label className="flex flex-row w-[100%] rounded-md border border-purple-100">
                        <divs className="libraryGird w-[20%]">
                            huyguggs
                        </span>
                        <span className="w-[80%]">
                            <span className="">
                                <h2 className="">
                                    Hitory of Monalissa
                                </h2>
                                <span className="">
                                    <p>Edited 2days ago</p>
                                    <button className="text-[20px]">
                                        <MdMoreVert />
                                    </button>
                                </span>
                            </span>
                            <span className="">

                            </span>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default LibraryGrid;