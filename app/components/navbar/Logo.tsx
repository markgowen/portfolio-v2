'use client';

import {useRouter} from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className="text-aqua px-4 py-3 cursor-pointer"
    >
      Mark Gowen
    </div>
  );
};

export default Logo;
