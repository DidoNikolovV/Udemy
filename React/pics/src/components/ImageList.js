import React from 'react';

const ImageList = ({ images }) => {
  const imgs = images.map((image) => {
    return <img src={image.urls.regular} alt="car"></img>;
  });

  return <div>{imgs}</div>;
};

export default ImageList;
