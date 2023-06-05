'use client';

/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/navigation';
import Button from './Button';

const CTA = () => {
  const router = useRouter();
  return (
    <div
      id='contact'
      className='mx-auto text-center mb-40 max-w-2xl'
    >
      <div className='text-salmon text-4xl mb-6 font-bold'>Reach Out</div>
      <div className='text-silver text-xl'>
        I'm always looking for new opportunities. If you have any questions or
        would like to work together, please feel free to reach out!
      </div>
      <Button
        mailto='hello@markgowen.dev'
        label='Say hello!'
      />
    </div>
  );
};

export default CTA;
