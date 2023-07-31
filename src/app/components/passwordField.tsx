import React, { useState } from "react";
import { Eye, EyeSlash } from "@material-ui/icons";

const PasswordField = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={handleClick}
        aria-label="Show or hide password"
      >
        {showPassword ? <EyeSlash /> : <Eye />}
      </button>
    </div>
  );
};

export default PasswordField;
