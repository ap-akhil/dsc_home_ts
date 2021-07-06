import React from "react";
import "./style.css";

interface InputProps {
  className: string;
  placeHolder: string;
  value?: any;
}

const Input = ({ className, placeHolder, value }: InputProps) => {
  return (
    <input
      className={className}
      placeholder={placeHolder}
      autoComplete="off"
      maxLength={100}
      type="text"
      value={value}
    />
  );
};

export default Input;
