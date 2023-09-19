import Link from "next/link";
import * as React from "react";

export interface ISeparatorSectionProps {
  title: string;
  children?: React.ReactNode;
}

const SeparatorSection: React.FunctionComponent<ISeparatorSectionProps> = ({
  title,
  children = <></>,
}) => {
  return (
    <div className="w-full flex items-center justify-between px-2 py-6">
      <Link href={"/"} className="text-[#7D7D7D] text-sm font-bold py-5">
        {title}
      </Link>
      {children}
    </div>
  );
};

export default SeparatorSection;
