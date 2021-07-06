import React from "react";
import Header from "../../organisms/header/Header";
import Carousel from "../../organisms/carousel/Carousel";
import Category from "../../organisms/category/Category";
import "./style.css";

export default function Hometemplate() {
  return (
    <>
      <header className="navbar-main">
        <Header />
      </header>
      <main>
        <Carousel />
        <Category />
      </main>
    </>
  );
}
