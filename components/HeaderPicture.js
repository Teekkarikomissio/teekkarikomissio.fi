import React from 'react';

const HeaderPicture = ({ img, alt }) => {
  return <img className="lg:rounded-lg lg:mt-16" src={img} alt={alt} />;
};

export default HeaderPicture;
