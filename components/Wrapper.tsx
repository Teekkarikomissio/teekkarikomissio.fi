import React from 'react';

type Props = {
  children: any;
};

const Wrapper = (props: Props) => {
  const { children } = props;

  return (
    <main className="grid grid-cols-[1fr_min(65ch,_100%)_1fr] gap-8">
      <div className="col-start-2">{children}</div>
    </main>
  );
};

export default Wrapper;
