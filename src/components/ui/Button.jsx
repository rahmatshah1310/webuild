import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button className={`cursor-pointer ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
