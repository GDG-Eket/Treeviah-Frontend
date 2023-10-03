// import Link from "next/link";
// import React, { useState } from "react";
// import PopMessage from "./popmodal";
// import { ModalContainer } from "@/components/atoms";

// interface PopupModalProp {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const PopupModal: React.FC<PopupModalProp> = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;
//   const [modalOpen, setModalOpen] = useState(isOpen);
//   const [searchFormOpen, setSearchFormOpen] = useState(true);

//   const handleSearchClick = () => {
//     setSearchFormOpen(false);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(isOpen);
//   };

//   return (
//     <>
//       {searchFormOpen && (
//         <ModalContainer onClick={handleCloseModal}>
//           <>
//             <div className="bg-white p-8 z-10 rounded-md text-center relative w-[90%] md:w-[400px]">
//               <h2 className="text-xl font-semibold mb-4">Add Friend</h2>
//               <form className="flex flex-col justify-start align-middle w-[100%] md:w-[300px] relative mb-4" id="popmodal">
//                 <label
//                   htmlFor="name"
//                   className="p-1 absolute top-[-16px] bg-white left-4"
//                 >
//                   Enter Usename
//                 </label>
//                 <input
//                   type="text"
//                   className="border border-gray-light rounded-md p-2 focus:outline-primary"
//                   placeholder=""
//                 />
//               </form>
//               <button
//                 type="button"
//                 className="mt-4 px-2 bg-primary text-white hover:text-purple-300 absolute w-[40px] h-[40px] rounded-full top-1 right-4"
//                 onClick={handleCloseModal}
//               >
//                 X
//               </button>
//               <Link
//                 className="mt-4 px-4 py-2 bg-primary text-white rounded hover:text-purple-300"
//                 href="/friends"
//                 onClick={handleSearchClick}
//               >
//                 Search
//               </Link>
//             </div>
//           </>
//         </ModalContainer>
//       )}
//       <PopMessage isOpen={modalOpen} onClose={handleCloseModal} />
//     </>
//   );
// };

// export default PopupModal;
"use client";
import React, { ReactNode } from "react";
import "@/styles/dashboard.css";
import Link from "next/link";

interface Props {
  onClose: () => void;
  children: ReactNode;
  title: string;
}

const Modal: React.FC<Props> = ({ onClose, children, title }) => {
  const handleCloseClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <Link
              href="#"
              onClick={handleCloseClick}
              className="p-2 rounded-full bg-primary w-10 h-10 flex justify-center items-center text-white"
            >
              x
            </Link>
          </div>
          {title && <h1>{title}</h1>}
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
