import { cn } from "@/lib/utils";
import * as React from "react";

interface IPageDescriptionProps {
  text: string;
  className?: string;
  number?: number;
}

const PageDescription: React.FunctionComponent<IPageDescriptionProps> = ({
  className,
  text,
  number,
}) => {
  return (
    <>
      <h1
        className={cn(
          "text-[#7D7D7D] text-sm font-bold py-5 gap-1 capitalize",
          className
        )}
      >
        {text}
        {number && <span>({number})</span>}
      </h1>
    </>
  );
};

export default PageDescription;
