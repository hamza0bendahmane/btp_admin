// Date: 04/20/2020
// import { NotifBing } from "@/lib/icons.images";
import Link from "next/link";
import { Icons } from "../ui/Icons";

export interface INavBarFunctionsProps {}

export function NavBarFunctions(props: INavBarFunctionsProps) {
  return (
    <div className="flex items-center gap-8 px-5">
      <Link href={"/"}>
        <Icons.notification height={21} width={21} />
      </Link>
      <Link href={"/"} className="flex items-center text-text-gray gap-1">
        <Icons.LuUser2 className="w-[21px] h-[21px]" />
        <span>Compte</span>
      </Link>
      <Link href={"/"} className="flex items-center text-text-gray gap-2">
        <span>Déconnectez vous</span>
        <Icons.LuLogOut className="w-[21px] h-[21px]" />
      </Link>
    </div>
  );
}
