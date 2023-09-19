import * as React from 'react';

interface INavBarCurrentPageProps {
    title: string
}

const NavBarCurrentPage: React.FunctionComponent<INavBarCurrentPageProps> = ({title}) => {
  return (
    <div className='flex flex-col gap-1'>
        <h1 className='text-lg font-bold capitalize text-black'>{title}</h1>
        <span className='text-[#A0A0A0] text-[10px] font-medium'>Vue générale sur les {title}</span>
    </div>
  );
};

export default NavBarCurrentPage;
