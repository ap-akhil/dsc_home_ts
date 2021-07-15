import React from "react";
import Text from "../text/text";
import "./style.css";

enum ButtonType {
  Button = "button",
  Submit = "submit",
  Reset = "reset",
}

interface ButtonProps {
  name: string;
  variant?: string;
  type?: ButtonType.Button | ButtonType.Submit | ButtonType.Reset | undefined;
}

const Button = ({ name, type, variant }: ButtonProps) => {
  return (
    <button className={`btn btn-${variant}`} type={type}>
      <Text content={name} type="btn" />
    </button>
  );
};

export default Button;
