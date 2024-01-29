import React from 'react';

export const H1 = ({ children }) => {
  return <h1 className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl mb-2 mt-10 mx-4 sm:mx-6 md:mx-8">{children}</h1>;
};

export const H2 = ({ children }) => {
  return <h2 className="text-gray-900 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 mt-10 mx-4 sm:mx-6 md:mx-8">{children}</h2>;
};

export const H3 = ({ children }) => {
  return <h3 className="text-gray-900 font-bold text-lg sm:text-xl md:text-2xl mb-2 mt-10 mx-2 sm:mx-4 md:mx-6">{children}</h3>;
};

export const LongText = ({ children }) => {
  return <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 mx-4 sm:mx-6 md:mx-8 break-words text-left">{children}</p>;
};

export const ShortText = ({ children }) => {
  return <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 mx-4 sm:mx-6 md:mx-8 break-words text-left sm:text-center">{children}</p>;
};

export const ListItem = ({ children }) => {
  return <li className="text-gray-700 text-base sm:text-lg overflow-hidden break-words">{children}</li>;
};
