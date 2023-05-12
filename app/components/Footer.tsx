import Link from 'next/link';

const Footer = () => {
  return (
    <div className="text-center text-aqua">
      <Link
        href="https://github.com/markgowen/capstone_portfolio"
        rel="noopener noreferrer"
        target="_blank"
        className="pb-16 hover:text-salmon"
      >
        Built and Designed by Mark Gowen &copy;2023
      </Link>
    </div>
  );
};

export default Footer;
