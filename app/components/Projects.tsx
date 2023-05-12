/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link';
import {AiOutlineFolder} from 'react-icons/ai';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Projects = () => {
  let projects = [
    {
      name: 'Airbnb Clone',
      description:
        'This project is an Airbnb clone built with Next.js, Tailwind CSS, Prisma, and MongoDB. It was developed by following a tutorial by Code with Antonio.',
      frameworks: 'Next.js, TypeScript, TailwindCSS, Prisma, MongoDB',
      website: 'https://rent-app-omega.vercel.app/',
      github: 'https://github.com/markgowen/airbnb-clone',
    },
    {
      name: 'Verbatim',
      description:
        'A simple and minimalistic design for a dictionary application',
      frameworks: 'JavaScript, HTML, CSS',
      website: 'https://verbatim-eta.vercel.app/',
      github: 'https://github.com/markgowen/verbatim',
    },
    {
      name: 'NASA App',
      description:
        'A React app that utilizes the NASA API to render their photo of the day.',
      frameworks: 'React.js, Bootstap, axios',
      website: 'https://nasa-app.vercel.app/',
      github: 'https://github.com/markgowen/nasa-photo-of-the-day',
    },
    {
      name: 'Portfolio',
      description:
        'My personal software engineering portfolio, showcasing my skills and projects as a software engineer.',
      frameworks: 'Next.js, TypeScript, TailwindCSS',
      website: '',
      github: 'https://github.com/markgowen/portfolio-v2',
    },
  ];

  return (
    <div
      id="projects"
      className="
        relative
        mx-auto
        my-6
        mt-48
        h-full
        w-full
        md:h-auto
        lg:h-auto
        max-w-6xl
        "
    >
      <div className="mt-48 mb-20 text-4xl sm:text-3xl font-bold leading-8 tracking-tight text-silver">
        <em className="text-salmon mr-2">//</em> Noteworthy Projects
      </div>
      <div
        className="
            divide-y
            w-full
            m-auto
            pb-48
            overflow-hidden
            rounded-none
            drop-shadow-xl
            sm:grid
            sm:grid-cols-2
            sm:gap-px
            sm:divide-y-0
            "
      >
        {projects.map((project, projectIdx) => (
          <div
            key={project.name}
            className={classNames(
              projectIdx === 0 ? 'rounded-none sm:rounded-tr-none' : '',
              projectIdx === 1 ? 'sm:rounded-none' : '',
              projectIdx === projects.length - 2 ? 'sm:rounded-none' : '',
              projectIdx === projects.length - 1
                ? 'relative rounded-none sm:rounded-bl-none'
                : '',
              'relative group bg-steel p-6'
            )}
          >
            <div className="h-9 w-9 -mt-4" aria-hidden="true">
              <span className={classNames('text-salmon rounded-none p-3')}>
                <AiOutlineFolder size={24} />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl text-aqua font-medium">
                <a
                  href={project.website}
                  target="_blank"
                  className="focus:outline-none"
                >
                  <span aria-hidden="true" />
                  {project.name}
                </a>
              </h3>
              <p className="mt-2 mb-8 text-md text-silver">
                {project.description}
              </p>
              <p className="text-mustard opacity-50 absolute inset-x-6 bottom-0 mb-6 text-xs">
                {project.frameworks}
              </p>
            </div>
            <div className="absolute top-6 right-6 flex">
              {project.github ? (
                <Link
                  href={project.github}
                  className="px-2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span
                    className="pointer-events-none text-gray-300 group-hover:text-silver"
                    aria-hidden="true"
                  >
                    <svg
                      className="fill-silver h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </span>
                </Link>
              ) : null}
              {project.website ? (
                <Link
                  href={project.website}
                  className="px-2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span
                    className="pointer-events-none text-gray-300 group-hover:text-silver"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </span>
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
