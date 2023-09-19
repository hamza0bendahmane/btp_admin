import * as React from 'react';
import NavBarCurrentPage from './NavBarCurrentPage';
import { Search } from '../ui/Search';
import { NavBarFunctions } from './NavBarFunctions';

export interface INavbarProps {
}

export function Navbar (props: INavbarProps) {
  return (
    <div className='w-full py-4 px-4 bg-white'>
        <div className='px-4 flex items-center justify-between'>
            <NavBarCurrentPage title='Client' />
            <Search />
            <NavBarFunctions />
        </div>
    </div>
  );
}


