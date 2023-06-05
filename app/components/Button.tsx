interface ButtonProps {
  onClick?: () => void;
  mailto?: string;
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, mailto }) => {
  const handleClick = () => {
    if (mailto) {
      window.location.href = `mailto:${mailto}`; // Open the user's default email client with the provided mailto address
    } else if (onClick) {
      onClick(); // Call the original onClick function if provided
    }
  };
  return (
    <button
      onClick={handleClick}
      className='
        border
        border-mustard
        text-mustard
        hover:border-white
        hover:text-white
        px-8
        py-2
        mt-10
    '
    >
      {label}
    </button>
  );
};

export default Button;
