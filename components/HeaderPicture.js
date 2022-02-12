import React from 'react';
import Image from 'next/image';

const HeaderPicture = ({ img, alt }) => {
  return (
    <Image
      className="lg:rounded-lg lg:mt-16"
      src={img}
      alt={alt}
      width={1920}
      height={1080}
    />
  );
};

export default HeaderPicture;
