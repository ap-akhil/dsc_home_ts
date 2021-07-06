import React from "react";
import { useState, useEffect } from "react";
import Carouselcard from "../../molecules/carouselcard/Carouselcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "../../atoms/link/link";
import Image from "../../atoms/image/image";
import "./style.css";

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const CarouselCardItems = [
    {
      id: 0,
      cardTitle: "Impossible Engineering",
      cardsubheading:
        "Behind every marvel of modern engineering is a cast of heroic trailblazers.",
      tag1: "Editor's Choice",
      tag2: "Must Watch",
    },
    {
      id: 1,
      cardTitle: "Impossible Engineering",
      cardsubheading:
        "Behind every marvel of modern engineering is a cast of heroic trailblazers.",
      tag1: "Editor's Choice",
      tag2: "Must Watch",
    },
    {
      id: 2,
      cardTitle: "Impossible Engineering",
      cardsubheading:
        "Behind every marvel of modern engineering is a cast of heroic trailblazers.",
      tag1: "Editor's Choice",
      tag2: "Must Watch",
    },
    {
      id: 3,
      cardTitle: "Impossible Engineering",
      cardsubheading:
        "Behind every marvel of modern engineering is a cast of heroic trailblazers.",
      tag1: "Editor's Choice",
      tag2: "Must Watch",
    },
  ];

  const onClickItem = (event: any) => {
    event.preventDefault();

    setIndex(Number(event.target.getAttribute("data-index")) || 0);
  };

  useEffect(() => {
    const lastIndex = CarouselCardItems.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
    return () => {};
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <div className="carousel-container">
        {CarouselCardItems.map((item) => {
          let position = "next-slide";
          if (item.id === index) {
            position = "active-slide";
          }
          if (
            item.id === index - 1 ||
            (index === 0 && item.id === CarouselCardItems.length - 1)
          ) {
            position = "last-slide";
          }
          return (
            <article key={item.id} className={`carousel-item ${position}`}>
              <Carouselcard
                cardTitle={`${item.cardTitle}`}
                cardsubheading={item.cardsubheading}
                tag1={item.tag1}
                tag2={item.tag2}
              />
            </article>
          );
        })}
        <button className="prev-btn" onClick={() => setIndex(index - 1)}>
          <FontAwesomeIcon icon={faAngleLeft} size="3x" color="#fff" />
        </button>
        <button className="next-btn" onClick={() => setIndex(index + 1)}>
          <FontAwesomeIcon icon={faAngleRight} size="3x" color="#fff" />
        </button>
        <div className="carousel-indicator">
          {CarouselCardItems.map((item) => (
            <Link
              key={item.id}
              href=""
              className={
                index === item.id
                  ? "carousel-indicator-active"
                  : "carousel-indicator-inactive"
              }
              data-index={item.id}
              onClick={onClickItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}
