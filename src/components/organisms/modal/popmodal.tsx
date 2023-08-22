import React, { useState, useEffect } from "react";
import Link from "next/link";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopMessage: React.FC<PopupModalProps> = ({ isOpen, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay the modal by 1 second before showing it
      const delayTimer = setTimeout(() => {
        setVisible(true);
      }, 1000);

      // Close the modal and clear the timer after 3 seconds
      const closeTimer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 4000);

      return () => {
        clearTimeout(delayTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [isOpen, onClose]);

  if (!visible) return null;

  return (
    <div className="py-2 px-4 bg-green-600 text-white w-[200px] rounded-md top-20 left-[60px] absolute">
      Added Successfully!
    </div>
  );
};

export default PopMessage;
