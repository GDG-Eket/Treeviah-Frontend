import Link from "next/link";
import React, { useState } from "react";
import PopMessage from "./popmodal";
import { ModalContainer } from "@/components/atoms";

interface PopupModalProp {
  isOpen: boolean;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProp> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [modalOpen, setModalOpen] = useState(isOpen);
  const [searchFormOpen, setSearchFormOpen] = useState(true);

  const handleSearchClick = () => {
    setSearchFormOpen(false); // Close the search form
    setModalOpen(true); // Show the PopMessage modal
  };

  const handleCloseModal = () => {
    setModalOpen(isOpen);
  };

  return (
    <>
      {searchFormOpen && (
        <ModalContainer onClick={handleCloseModal}>
          <>
            <div className="bg-white p-8 z-10 rounded-md text-center relative w-[90%] md:w-[400px]">
              <h2 className="text-xl font-semibold mb-4">Add Friend</h2>
              <form className="flex flex-col justify-start align-middle w-[100%] md:w-[300px] relative mb-4" id="popmodal">
                <label
                  htmlFor="name"
                  className="p-1 absolute top-[-16px] bg-white left-4"
                >
                  Enter Usename
                </label>
                <input
                  type="text"
                  className="border border-gray-light rounded-md p-2 focus:outline-primary"
                  placeholder=""
                />
              </form>
              <button
                type="button"
                className="mt-4 px-2 bg-primary text-white hover:text-purple-300 absolute w-[40px] h-[40px] rounded-full top-1 right-4"
                onClick={handleCloseModal}
              >
                X
              </button>
              <Link
                className="mt-4 px-4 py-2 bg-primary text-white rounded hover:text-purple-300"
                href="/friends"
                onClick={handleSearchClick}
              >
                Search
              </Link>
            </div>
          </>
        </ModalContainer>
      )}
      <PopMessage isOpen={modalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default PopupModal;
