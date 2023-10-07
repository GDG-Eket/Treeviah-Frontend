import React, { SelectHTMLAttributes } from "react";

interface SelectGroupProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: any; label: string }[];
  placeholder: string;
}

const SelectGroup: React.FC<SelectGroupProps> = ({
  label,
  placeholder,
  options,
  ...rest
}) => {
  return (
    <div>
      <p className="text-2xl font-bold text-gray-950 mb-2">{label}</p>
      <div className="border w-full border-[#AAA]  text-base text-[#555] bg-[#F9F9FB] rounded-lg px-4 py-3  focus:border-customBlue">
        <select
          {...rest}
          className="w-full focus:border-none focus:outline-none bg-transparent"
        >
          <option value="" disabled selected>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectGroup;
