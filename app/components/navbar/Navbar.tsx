'use client';

import Link from 'next/link';
import {useRouter} from 'next/navigation';

import Container from '../Container';
import Logo from './Logo';
import MenuItem from './MenuItem';
import {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <div
      className="
            fixed
            z-10
            w-full
        "
    >
      <div
        className="
            border-b-[1px]
            py-4
            border-midnight-200
            bg-midnight-100
        "
      >
        <Container>
          <div
            className="
                    flex
                    flex-row
                    justify-between
                    items-center
                    gap-1
                    md:gap-0
                "
          >
            <Logo />
            <div className="hidden sm:flex">
              <MenuItem onClick={() => router.push('/#about')} label="About" />
              <MenuItem onClick={() => router.push('/#work')} label="Work" />
              <MenuItem
                onClick={() => router.push('/#projects')}
                label="Projects"
              />
              <MenuItem
                onClick={() => router.push('/contact')}
                label="Contact"
              />
              <Link id="resume" href="/resume.pdf" target="_blank">
                <MenuItem label="Resume" />
              </Link>
            </div>
            <button
              onClick={handleMenu}
              className="px-4 py-3 flex sm:hidden text-aqua"
            >
              {open === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </Container>
        {open ? (
          <div
            className="
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
        "
          >
            <MenuItem onClick={() => router.push('/#about')} label="About" />
            <MenuItem onClick={() => router.push('/#work')} label="Work" />
            <MenuItem
              onClick={() => router.push('/#projects')}
              label="Projects"
            />
            <MenuItem onClick={() => router.push('/contact')} label="Contact" />
            <Link id="resume" href="/resume.pdf" target="_blank">
              <MenuItem label="Resume" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
