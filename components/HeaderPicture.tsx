import React from 'react';

interface Props {
  img: string;
  alt: string;
}

const HeaderPicture: React.FC<Props> = ({ img, alt }) => {
  return <img className="lg:rounded-lg lg:mt-16 mb-8" src={img} alt={alt} />;
};

export default HeaderPicture;
