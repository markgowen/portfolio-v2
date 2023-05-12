/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

interface MenuItemProps {
  onClick?: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({onClick, label}) => {
  return (
    <div
      onClick={onClick}
      className="
            place-content-end
            px-4
            py-3
            text-sm
            text-aqua
            hover:text-silver
            cursor-pointer
            "
    >
      <em className="text-salmon mr-2">//</em>
      {label}
    </div>
  );
};

export default MenuItem;
