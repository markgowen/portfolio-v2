'use client';

/* eslint-disable react/no-unescaped-entities */
import {useRouter} from 'next/navigation';
import Button from './Button';
import Container from './Container';

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="
                relative
                mx-auto
                my-6
                pt-16
                h-full
                w-full
                md:h-auto
                md:w-4/5
                lg:h-auto
                lg:w-5/6
                xl:max-w-[800px]
                "
      >
        <div
          className="
                text-aqua
                text-base
                "
        >
          Hi, my name is
        </div>
        <div
          className="
            pt-4
            text-7xl
            font-bold
            text-white
        "
        >
          Mark Gowen
        </div>
        <div
          className="
            pt-4
            text-7xl
            font-bold
            text-silver
        "
        >
          I'm a Digital Crafter.
        </div>
        <div
          className="
            pt-8
            pb-4
            text-xl
            text-silver
            "
        >
          I am a software engineer that has a passion for building user-friendly
          and beautiful{' '}
          <em className="text-salmon not-italic">front-end applications.</em>
        </div>
        <Button onClick={() => router.push('/contact')} label="Say hello!" />
      </div>
    </>
  );
};

export default Hero;
