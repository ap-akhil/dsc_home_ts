import React from "react";
import Categorycard from "../../molecules/categorycard/Categorycard";
import "./style.css";

export default function Category() {
  const Categories = [
    {
      id: 1,
      label: "Adventure",
      img: "Adventure.jpeg",
      mobImg: "Adventure_mob.png",
    },
    {
      id: 2,
      label: "Science",
      img: "Science.jpeg",
      mobImg: "Science_mob.png",
    },
    {
      id: 3,
      label: "History",
      img: "History.jpeg",
      mobImg: "History_mob.png",
    },
    {
      id: 4,
      label: "Free Watch",
      img: "Freewatch.jpeg",
      mobImg: "Freewatch_mob.png",
    },
    {
      id: 5,
      label: "Investigation",
      img: "Investigation.jpeg",
      mobImg: "Investigation_mob.png",
    },
    {
      id: 6,
      label: "Nature",
      img: "Nature.jpeg",
      mobImg: "Nature_mob.png",
    },
  ];
  return (
    <>
      <div className="category-card-container">
        {Categories.map((item, index) => {
          return (
            <Categorycard
              clsName={`ctg-img-item${item.id}`}
              key={index}
              img={item.img}
              lbl={item.label}
            />
          );
        })}
      </div>

      <div style={{ width: "100%", height: "100px" }}></div>
    </>
  );
}
