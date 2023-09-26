"use client";

import NavBarCurrentPage from "./NavBarCurrentPage";
import { Search } from "../ui/Search";
import { NavBarFunctions } from "./NavBarFunctions";
import { usePathname } from "next/navigation";

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  const pathname = usePathname();

  console.log(pathname);
  let title = pathname.split("/")[1];

  return (
    <div className="w-full py-4 px-4 bg-white">
      <div className="px-4 flex items-center justify-between">
        <NavBarCurrentPage title={title} />
        <Search />
        <NavBarFunctions />
      </div>
    </div>
  );
}
