import React from "react";
import Text from "../text/text";
import "./style.css";

interface ButtonProps {
  name: string;
  variant?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ name, type, variant }: ButtonProps) => {
  return (
    <button className={`btn btn-${variant}`} type={type}>
      <Text content={name} type="btn" />
    </button>
  );
};

export default Button;
