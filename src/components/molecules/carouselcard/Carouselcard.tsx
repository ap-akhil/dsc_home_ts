import React from "react";
import Image from "../../atoms/image/image";
import Text from "../../atoms/text/text";
import Button from "../../atoms/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import "./style.css";

interface Props {
  cardTitle: string;
  cardsubheading: string;
  tag1: string;
  tag2: string;
}

export default function Carouselcard({
  cardTitle,
  cardsubheading,
  tag1,
  tag2,
}: Props) {
  return (
    <div className="carousal-card">
      <div className="carousal-card-content">
        <Text content={cardTitle} type="carousal-heading" />
        <Text content={cardsubheading} type="carousal-subheading" />
        <Button name={tag1} variant="secondary" />
        <Button name={tag2} variant="secondary" />
        <div className="play-content">
          <FontAwesomeIcon
            className="play-icon"
            icon={faPlayCircle}
            size="4x"
            color="#fff"
          />
          <Text content="Play" type="carousal-play" />
        </div>
      </div>
      <div className="carousal-card-image">
        <Image location="airport.jpeg" alt="airport" className="carousel-img" />
      </div>
    </div>
  );
}
