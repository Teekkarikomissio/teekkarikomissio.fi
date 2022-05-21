import React from 'react';
import Image from 'next/image';

const HeaderPicture = ({ img, alt }) => {
  return (
    <div className="relative h-48 w-full">
      <Image
        className="lg:rounded-lg lg:mt-16"
        src={img}
        alt={alt}
        layout="fill"
      />
    </div>
  );
};

export default HeaderPicture;
