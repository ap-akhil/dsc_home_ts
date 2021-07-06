import React from "react";
import "./style.css";

interface ImageProps {
  location: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Image = ({ location, alt, width, height, className }: ImageProps) => {
  return (
    <img
      src={`/images/${location}`}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
