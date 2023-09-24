import * as React from "react";
import BasicTable from "../ui/Table";

export interface ITableComponentProps {}

export function TableComponent(props: ITableComponentProps) {
  return (
    <div className="py-10">
      <BasicTable />
    </div>
  );
}
