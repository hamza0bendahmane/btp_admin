import * as React from 'react';

interface IStaticsCardProps {
    title: string,
    Icon: JSX.Element,
    value: string
}

const StaticsCard: React.FunctionComponent<IStaticsCardProps> = ({title, value, Icon}) => {
  return (
    <div className='bg-white px-4 py-10 flex  justify-around max-w-[350px] w-[350px] h-[180px]'>
        <div className='flex flex-col gap-2'>
            <h2 className='text-gray-light font-medium text-lg capitalize'>{title}</h2>
            <span className='text-black font-bold text-2xl'>{value}</span>
        </div>
        <div>
            {Icon}
        </div>
    </div>
  );
};

export default StaticsCard;
