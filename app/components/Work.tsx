/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useState } from 'react';
import Company from './Company';

/* eslint-disable react/no-unescaped-entities */
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const Work = () => {
  const [employerId, setEmployerId] = useState(1);

  let employers = [
    {
      id: 1,
      name: 'Slingshot, Inc.',
      role: 'Web Developer',
      time_employed: 'May 2023 - Present',
      description_1:
        'Collaborate with cross-functional teams to launch websites on WordPress, with a goal to increase sales by 25% and improve conversion rates. Including SEO best practices.',
    },
    {
      id: 2,
      name: 'Mark Gowen, LLC',
      role: 'Photographer',
      time_employed: 'February 2018 - Present',
      description_1:
        'Developed and executed creative concepts for 100+ wedding and 50+ portrait photography clients, resulting in a unique and personalized experience.',
      description_2:
        'Collaborated with 3-5 vendors and event planners per wedding to ensure seamless coordination of events, resulting in a stress-free and enjoyable experience for clients.',
    },
    {
      id: 3,
      name: '1 Source Solar',
      role: 'Director of Sales',
      time_employed: 'November 2017 - February 2018',
      description_1:
        'Implemented innovative sales techniques and training programs that increased the effectiveness and productivity of the sales team, resulting in a 30% increase in the number of successful deals closed. ',
      description_2:
        'Collaborated with cross-functional teams, including engineering and installation teams, to ensure seamless delivery of solar solutions to achieve 95% customer satisfaction.',
    },
    {
      id: 4,
      name: 'Iowa Wind and Solar',
      role: 'Renewable Energy Consultant',
      time_employed: 'December 2015 - November 2017',
      description_1:
        'Conducted 25-50 detailed energy audits and assessments of residential and commercial properties per month to identify potential energy savings and renewable energy solutions. ',
      description_2:
        'Advised clients on various renewable energy technologies and their benefits, resulting in an increase in adoption and a 40% increase in sales revenue.',
    },
  ];

  const employer = employers.find((employer) => employer.id === employerId);

  const initialEmployer = employers[0];

  return (
    <>
      <div
        id='work'
        className='relative mx-auto my-6 md:mt-48 py-16 px-6 max-w-3xl'
      >
        <div className='text-4xl sm:text-3xl font-bold leading-8 tracking-tight text-silver'>
          <em className='text-salmon mr-2'>//</em> Places I've Worked
        </div>
        <div className='flex flex-col md:flex-row '>
          {/* Sidebar navigation */}
          <div className='max-w-max overflow-y-auto pt-5 pb-4 md:sticky md:top-0 md:h-full '>
            <div className='mt-5 flex flex-col flex-grow items-center'>
              <nav className='flex-1 cursor-pointer'>
                <div className='flex md:flex-wrap'>
                  {employers.map((employer) => (
                    <div
                      onClick={() => setEmployerId(employer.id)}
                      key={employer.name}
                      className={classNames(
                        employer.id === employerId
                          ? 'border-salmon bg-salmon/10 text-salmon hover:border-l-salmon hover:bg-salmon/10 hover:text-salmon'
                          : 'border-silver/10 text-silver hover:bg-salmon/10 hover:text-salmon',
                        'group flex px-5 py-2 text-base font-medium border-l-4 mr-2'
                      )}
                    >
                      {employer.name}
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>

          {/* Individual employer component */}
          <div className='flex-grow mt-10'>
            {employer ? (
              <Company employer={employer} />
            ) : (
              <Company employer={initialEmployer} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
