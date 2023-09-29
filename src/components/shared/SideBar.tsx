import * as React from "react";
import Link from "next/link";
import { Icons } from "../ui/Icons";

interface IAppProps {}

const linkSidebar = [
  {
    id: 1,
    icon: <Icons.dashboard className="w-[20px] h-[20px]" />,
    to: "/",
  },
  {
    id: 2,
    icon: <Icons.user className="w-[20px] h-[20px] " />,
    to: "client",
  },
  {
    id: 3,
    icon: <Icons.seller className="w-[20px] h-[20px]" />,
    to: "vendeur",
  },
  {
    id: 4,
    icon: <Icons.twoUsers className="w-[20px] h-[20px]" />,
    to: "moderateur",
  },
  {
    id: 5,
    icon: <Icons.box className="w-[20px] h-[20px]" />,
    to: "product",
  },
  {
    id: 6,
    icon: <Icons.letter className="w-[20px] h-[20px]" />,
    to: "/",
  },
  {
    id: 7,
    icon: <Icons.saveAdd className="w-[20px] h-[20px]" />,
    to: "/",
  },
  {
    id: 8,
    icon: <Icons.creditCard className="w-[20px] h-[20px]" />,
    to: "/",
  },
  {
    id: 9,
    icon: <Icons.donation className="w-[20px] h-[20px]" />,
    to: "/",
  },
  {
    id: 10,
    icon: <Icons.bag className="w-[20px] h-[20px]" />,
    to: "/",
  },
  {
    id: 11,
    icon: <Icons.notificationSideBar className="w-[20px] h-[20px]" />,
    to: "/",
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
              <Link
                href={item.to}
                key={item.id}
                className="cursor-pointer w-full h-full flex items-center justify-center"
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
