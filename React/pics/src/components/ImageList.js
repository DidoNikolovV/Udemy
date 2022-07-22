import React from 'react';

const ImageList = ({ images }) => {
  const imgs = images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description}></img>;
  });

  return <div>{imgs}</div>;
};

export default ImageList;
