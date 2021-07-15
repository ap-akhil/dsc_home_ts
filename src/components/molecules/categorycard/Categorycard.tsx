import React from "react";
import Image from "../../atoms/image/image";
import Text from "../../atoms/text/text";
import "./style.css";

type Props = {
  lbl: string;
  img: string;
  clsName: string;
};

export default function Categorycard({ lbl, img, clsName }: Props) {
  return (
    <>
      <div className="category-card">
        <Image
          className={`category-card-image ${clsName}`}
          alt="img"
          location={img}
        />
        <div className="category-card-label">
          <Text content={lbl} type="category-label" />
        </div>
      </div>
    </>
  );
}
