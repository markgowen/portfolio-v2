interface ButtonProps {
  onClick: () => void;
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
  return (
    <button
      onClick={onClick}
      className="border border-mustard text-mustard hover:border-white hover:text-white px-8 py-2 mt-10"
    >
      {label}
    </button>
  );
};

export default Button;
