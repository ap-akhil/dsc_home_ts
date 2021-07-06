import React from "react";
import Categorycard from "../../molecules/categorycard/Categorycard";
import "./style.css";

export default function Category() {
  const Categories = [
    {
      label: "Adventure",
    },
    {
      label: "Science",
    },
    {
      label: "History",
    },
    {
      label: "Free Watch",
    },
    {
      label: "Investigation",
    },
    {
      label: "Nature",
    },
  ];
  return (
    <div className="category-card-container">
      {Categories.map((item, index) => {
        return <Categorycard key={index} lbl={item.label} />;
      })}
    </div>
  );
}
