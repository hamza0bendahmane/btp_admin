import * as React from "react";

interface IStaticsCardProps {
  title: string;
  Icon?: JSX.Element;
  value: string;
  augmentation?: string;
}

const StaticsCard: React.FunctionComponent<IStaticsCardProps> = ({
  title,
  value,
  Icon,
  augmentation,
}) => {
  return (
    <div className="bg-white px-4 py-10 flex  justify-around max-w-[350px] w-[350px] h-[180px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-gray-light font-medium text-lg capitalize">
            {title}
          </h2>
          <span className="text-black font-bold text-2xl">{value}</span>
        </div>
        {augmentation && (
          <div className="text-[12px] capitalize font-normal">
            Augmentation
            <span className="text-[#56CA00] text-[#3A3541AD] ml-2">
              {augmentation}%
            </span>
          </div>
        )}
      </div>

      {Icon && <div>{Icon}</div>}
    </div>
  );
};

export default StaticsCard;
