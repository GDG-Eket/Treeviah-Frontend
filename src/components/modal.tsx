// components/PopupModal.tsx
import Link from "next/link";
import React, { useState } from "react";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-60"
        onClick={onClose}
      ></div>
      <div className="bg-white p-8 rounded-md z-50 text-center relative">
        <h2 className="text-xl font-semibold mb-4">Add Friend</h2>
        <form className="flex flex-col justify-start align-middle w-[300px] relative mb-4">
          <label htmlFor="name" className="p-1 absolute -top-4 bg-white left-4">
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
            onClick={onClose}
          >
            X
          </button>
        <Link
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:text-purple-300"
          href="/friends"
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default PopupModal;
