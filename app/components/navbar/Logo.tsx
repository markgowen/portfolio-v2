'use client';

import { animateScroll } from 'react-scroll';

const Logo = () => {
  return (
    <div
      onClick={() => animateScroll.scrollToTop()}
      className='text-aqua px-4 py-3 cursor-pointer'
    >
      Mark Gowen
    </div>
  );
};

export default Logo;
