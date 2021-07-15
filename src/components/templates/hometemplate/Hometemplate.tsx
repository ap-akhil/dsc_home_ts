import React from "react";
import Header from "../../organisms/header/Header";
import Carousel from "../../organisms/carousel/Carousel";
import Gridrow from "../../organisms/Grid/Gridrow";
import "./style.css";

export default function Hometemplate() {
  return (
    <>
      <header className="navbar-main">
        <Header />
      </header>
      <main>
        <Carousel />
        <Gridrow />
      </main>
    </>
  );
}
