import * as React from "react";
import BasicTable from "./TableDate";
import PaginationButtons from "../ui/PaginationSlider";
import BasicTableButton from "./TableButton";

export interface ITableComponentProps {
  type: "date" | "user";
}

export function TableComponent({ type }: ITableComponentProps) {
  return (
    <div className="py-10">
      {type === "date" ? <BasicTable /> : <BasicTableButton />}
      <div className="flex items-center justify-center py-6 w-full">
        <PaginationButtons />
      </div>
    </div>
  );
}
