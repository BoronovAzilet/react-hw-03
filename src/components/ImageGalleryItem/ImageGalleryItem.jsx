import React from "react";

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  modalToggler,
}) => {
  return (
    <>
      <li
        className="ImageGalleryItem"
        key={id}
        onClick={() => modalToggler(largeImageURL)}
      >
        <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
      </li>
    </>
  );
};

export default ImageGalleryItem;
