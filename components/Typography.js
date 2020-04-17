import React from 'react';

export const H1 = ({ children }) => {
  return <h1 className="text-gray-900 font-bold text-4xl mb-2 mt-10 mx-8">{children}</h1>;
};

export const H2 = ({ children }) => {
  return <h2 className="text-gray-900 font-bold text-2xl mb-2 mt-10 mx-8">{children}</h2>;
};

export const LongText = ({ children }) => {
  return <p className="text-left text-gray-700 text-lg mb-8 mx-8">{children}</p>;
};

export const ShortText = ({ children }) => {
  return <p className="lg:text-center text-left text-gray-700 text-lg mb-8 mx-8">{children}</p>;
};

export const ListItem = ({ children }) => {
  return <li className="text-left text-gray-700 text-lg">{children}</li>;
};
