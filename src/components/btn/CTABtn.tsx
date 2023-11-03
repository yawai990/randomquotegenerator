import React from 'react';

const CTABtn = ({
  click,
  icon,
}: {
  click: () => void;
  icon: React.ReactNode;
}) => {
  return (
    <button
      onClick={click}
      className="p-1.5 rounded-full duration-150 border bg-white text-gray-400 font-light hover:drop-shadow-md"
    >
      {icon}
    </button>
  );
};

export default CTABtn;
