import Image from 'next/image';
import Portrait from '../../public/images/mark.jpeg';
import Link from 'next/link';

/* eslint-disable react/jsx-no-comment-textnodes */
const About = () => {
  return (
    <div id='about'>
      <div
        className='
        relative
        mx-auto
        my-6
        md:mt-48
        h-full
        w-full
        md:h-auto
        lg:h-auto
        max-w-6xl
        '
      >
        <div className='relative py-16 px-6'>
          <div>
            <div
              className='
                mx-auto
                max-w-prose
                lg:grid
                lg:max-w-none
                lg:grid-cols-2
                lg:gap-8
            '
            >
              <div className='text-4xl sm:text-3xl font-bold leading-8 tracking-tight text-silver'>
                <em className='text-salmon mr-2'>//</em> About Me
              </div>
            </div>
            <div
              className='
                mt-8
                lg:grid
                lg:grid-cols-2
                lg:gap-8
            '
            >
              <div
                className='
                    relative
                    lg:col-start-2
                    lg:row-start-1
                '
              >
                <svg
                  className='absolute top-0 right-0 -mt-20 -mr-30 hidden lg:block'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'
                >
                  <defs>
                    <pattern
                      id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={2}
                        height={2}
                        className='text-mustard'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                  />
                </svg>
                <div
                  className='
                    relative
                    max-w-prose
                '
                >
                  <div
                    className='
                        drop-shadow-xl
                        aspect-w-12
                        aspect-h-7
                        hidden
                        lg:block
                        mr-5
                        -mt-10
                    '
                  >
                    <Image
                      className='rounded-none object-cover object-center'
                      src={Portrait}
                      alt='Portrait of Mark Gowen'
                      width={1184}
                      height={1376}
                    />
                  </div>
                </div>
              </div>
              <div className='mt-8 lg:mt-0'>
                <div className='mx-auto max-w-prose text-base lg:max-w-none text-silver'>
                  <p className=''>
                    Hello! My name is Mark, and I am a passionate and creative
                    web developer. My journey in the tech world began in 2012
                    when I took my first web development course at a community
                    college. It was there where I discovered my love for coding
                    and my interest in building beautiful and user-friendly web
                    applications.
                  </p>
                  <br />
                  <p>
                    I have always had a passion for creating things, whether it
                    be with my camera, my hands or crafting web applications.
                    This led me to further my education and skills by attending{' '}
                    <Link
                      href='https://flatironschool.com/'
                      rel='noopener noreferrer'
                      target='_blank'
                      className='text-aqua not-italic no-underline'
                    >
                      Flatiron School
                    </Link>{' '}
                    where I graduated as a full-stack web developer.
                  </p>
                  <br />
                  <p>
                    I am now on the lookout for new and exciting opportunities
                    to showcase my skills and continue growing as a developer.
                    My favorite frameworks include{' '}
                    <em className='text-aqua not-italic'>
                      React, TailwindCSS, and Next.js
                    </em>
                    . I love the versatility and power that these tools bring to
                    web development and the endless possibilities they offer.
                  </p>
                  <br />
                  <p>
                    In my free time, I enjoy experimenting with new
                    technologies, photography, and DIY projects. I am always
                    eager to learn something new and am dedicated to delivering
                    high-quality work. I believe in the power of collaboration
                    and enjoy working with a team to bring ideas to life. If you
                    are looking for a driven and dedicated web developer, I
                    would love the opportunity to chat with you further.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
