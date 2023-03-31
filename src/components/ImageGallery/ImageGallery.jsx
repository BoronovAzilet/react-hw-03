import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
const ImageGallery = ({ images, modalToggler }) => {
  const ImagesElem = images.map((image) => (
    <ImageGalleryItem key={image.id} {...image} modalToggler={modalToggler} />
  ));

  return (
    <>
      <ul className="ImageGallery">{ImagesElem}</ul>
    </>
  );
};

export default ImageGallery;
