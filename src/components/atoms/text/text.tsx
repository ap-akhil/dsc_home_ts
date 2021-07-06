import React from "react";
import "./style.css";

interface TextProps {
  content?: string;
  type?: string;
}

const Text = ({ content, type }: TextProps) => {
  return <p className={`text-${type}`}>{content}</p>;
};

export default Text;
