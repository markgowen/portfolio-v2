'use client';

import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

import Container from '../Container';
import Logo from './Logo';
import MenuItem from './MenuItem';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className='
            fixed
            z-10
            w-full
        '
    >
      <div
        className='
            border-b-[1px]
            py-4
            border-midnight-200
            bg-midnight-100
        '
      >
        <Container>
          <div
            className='
                    flex
                    flex-row
                    justify-between
                    items-center
                    gap-1
                    md:gap-0
                '
          >
            <Logo />
            <div className='hidden sm:flex'>
              <ScrollLink
                to='about'
                smooth={true}
                offset={-70}
                duration={500}
              >
                <MenuItem label='About' />
              </ScrollLink>
              <ScrollLink
                to='work'
                smooth={true}
                offset={-120}
                duration={500}
              >
                <MenuItem label='Work' />
              </ScrollLink>
              <ScrollLink
                to='projects'
                smooth={true}
                offset={-120}
                duration={500}
              >
                <MenuItem label='Projects' />
              </ScrollLink>
              <ScrollLink
                to='contact'
                smooth={true}
                offset={-120}
                duration={500}
              >
                <MenuItem label='Contact' />
              </ScrollLink>
              <Link
                id='resume'
                href='/resume.pdf'
                target='_blank'
              >
                <MenuItem label='Resume' />
              </Link>
            </div>
            <button
              onClick={handleMenu}
              className='px-4 py-3 flex sm:hidden text-aqua'
            >
              {open === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </Container>
        {open ? (
          <div
            className='
            absolute
            right-0
            top-14
            w-[40vw]
            overflow-hidden
            rounded-none
            bg-black
            text-sm
            shadow-md
            md:w-3/4
        '
          >
            <ScrollLink
              to='about'
              smooth={true}
              offset={-70}
              duration={500}
            >
              <MenuItem label='About' />
            </ScrollLink>
            <ScrollLink
              to='work'
              smooth={true}
              offset={-120}
              duration={500}
            >
              <MenuItem label='Work' />
            </ScrollLink>
            <ScrollLink
              to='projects'
              smooth={true}
              offset={-120}
              duration={500}
            >
              <MenuItem label='Projects' />
            </ScrollLink>
            <ScrollLink
              to='contact'
              smooth={true}
              offset={-120}
              duration={500}
            >
              <MenuItem label='Contact' />
            </ScrollLink>
            <Link
              id='resume'
              href='/resume.pdf'
              target='_blank'
            >
              <MenuItem label='Resume' />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
