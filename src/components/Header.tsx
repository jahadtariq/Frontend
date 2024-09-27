import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="header font-Montserrat bg-dark text-white px-4 py-2 flex justify-between items-center pt-4">
      <div className='flex flex-col gap-1'>
        <h1 className='text-[32px]'>{title}</h1>
        <h1 className='text-[14px] text-[#909093]'>{subtitle}</h1>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <div>Search bar</div>
        <div>not</div>
        <div>not</div>
      </div>
    </div>
  );
};

export default Header;
