import React from "react";

function UnsplashList(props) {
  console.log(props);
  return (
    <figure className="gallery__item">
      <img src={`${props.image.urls.thumb}`} alt="" className="gallery__img" />
    </figure>
  );
}

function UnsplashCont(props) {
  return (
    <div className="unsplash__cont">
      <div className="container">
        <div className="unsplash__inner">
          {props.images.map((images, index) => (
            <UnsplashList image={images} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UnsplashCont;
