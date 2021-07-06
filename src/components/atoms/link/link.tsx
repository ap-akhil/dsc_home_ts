import React from "react";
import Text from "../text/text";
import "./style.css";

interface LinkProps {
  className: string;
  href?: string;
  content?: string;
  type?: string;
  onClick?: any;
  rest?: object;
}

const Link = ({
  className,
  href = "#",
  content,
  type,
  onClick,
  ...rest
}: LinkProps) => {
  return (
    <a className={className} onClick={onClick} href={href} {...rest}>
      <Text content={content} type={type} />
    </a>
  );
};

export default Link;
