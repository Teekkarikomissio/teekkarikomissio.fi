import React from 'react';
import Image from 'next/image';

import { H1, ShortText } from '../components/Typography';

type Props = {
  metaTitle: string;
  homeHeading: string;
  homeContent: string;
};

const Hero = (props: Props) => {
  const { metaTitle, homeHeading, homeContent } = props;

  return (
    <>
      <div className="h-64">
        <Image
          src="/landing_page_image.jpg"
          alt="Teekkarikomission vuosijuhlat"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      <h1 className="relative rounded-md backdrop-contrast-3xl bg-white/30 text-8xl antialiased prose text-black">
        {metaTitle}
      </h1>

      <div className="relative backdrop-blur-3xl bg-white/30 prose text-white">
        <h2 className="prose text-black text-xl">{homeHeading}</h2>
        <p className="prose text-black">{homeContent}</p>
      </div>
    </>
  );
};

export default Hero;
