import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import UnsplashCont from "../includes/UnsplashCont";
import { useState, useEffect } from "react";

function Unsplash() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos?client_id=r6e6_4ZwiAV0Dc0WvGopVnh2YGoPLi5X-C52UOikVNc&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unslpash", "Api"]} />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Unsplash;
