import * as React from "react";
import Link from "next/link";
import { Icons } from "../ui/Icons";

interface IAppProps {}

const linkSidebar = [
  {
    id: 1,
    icon: <Icons.dashboard className="w-[20px] h-[20px]" />,
  },
  {
    id: 2,
    icon: <Icons.dashboard className="w-[20px] h-[20px]" />,
  },
  {
    id: 3,
    icon: <Icons.dashboard className="w-[20px] h-[20px]" />,
  },
  {
    id: 4,
    icon: <Icons.dashboard className="w-[20px] h-[20px]" />,
  },
  {
    id: 5,
    icon: <Icons.dashboard className="w-[20px] h-[20px]" />,
  },
  {
    id: 6,
    icon: <Icons.dashboard className="w-[20px] h-[20px]" />,
  },
  {
    id: 7,
    icon: <Icons.dashboard className="w-[20px] h-[20px]" />,
  },
  {
    id: 8,
    icon: <Icons.dashboard className="w-[20px] h-[20px]" />,
  },
  {
    id: 9,
    icon: <Icons.dashboard className="w-[20px] h-[20px]" />,
  },
  {
    id: 10,
    icon: <Icons.dashboard className="w-[20px] h-[20px]" />,
  },
  {
    id: 11,
    icon: <Icons.dashboard className="w-[20px] h-[20px]" />,
  },
];

const SideBar: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="bg-main  h-[100vh] fixed w-[90px] px-2 py-6">
      <div className="flex items-center justify-center flex-col gap-7">
        <Link href={"/"} className="">
          <Icons.BtmLogo className="w-[40px] h-[40px]" />
        </Link>
        <div className="flex flex-col mt-10 gap-8">
          {linkSidebar.map((item, index) => {
            return (
              <div
                key={item.id}
                className="cursor-pointer w-full h-full flex items-center justify-center"
              >
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
