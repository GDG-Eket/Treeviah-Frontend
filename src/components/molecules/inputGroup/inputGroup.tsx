import React, { InputHTMLAttributes } from "react";
import Input from "@/components/atoms/input";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

interface InputGroupProps extends InputProps {
  label: string;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, ...rest }) => {
  return (
    <div>
      <p className="text-base text-gray-950 mb-1">{label}</p>
      <Input
        {...rest}
        className="border w-full border-gray-300 text-customGray1 bg-[#F9F9FB] rounded-lg py-[5px] px-4 focus:outline-none focus:border-customBlue"
      />
    </div>
  );
};

export default InputGroup;
