import React from 'react';
import { useRouter } from 'next/router';

import BannerStyles from './Banner.module.scss';

export const Banner = () => {
  const { locale } = useRouter();

  const bannerText =
    locale === 'fi' ? (
      <>
        <h1>TEEKKARIKOMISSIO</h1>
        <br />
        <p>...eli tuttavallisemmin TK</p>
      </>
    ) : (
      <>
        <h1>TEKNOLOGKOMMISSIONEN</h1>
        <br />
        <p>...eller bland vänner bara TK</p>
      </>
    );

  return <div className={BannerStyles['hero']}>{bannerText}</div>;
};
