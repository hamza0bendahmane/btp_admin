import * as React from "react";
import { Search } from "../ui/Search";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
import { Icons } from "../ui/Icons";

interface ISearchFilterTableProps {
  typeSections: string[];
}

const SearchFilterTable: React.FunctionComponent<ISearchFilterTableProps> = ({
  typeSections,
}) => {
  return (
    <div className="flex flex-col gap-3 px-10 bg-white py-6">
      <div className="flex items-center gap-5 py-4">
        {typeSections.map((item, index) => (
          <span className="text-black text-sm font-bold capitalize" key={index}>
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between w-full py-4">
        <Search
          inputClassName="rounded-none w-full"
          className="w-[60%]"
          buttonClassName="rounded-none px-6"
        />
        <Select>
          <SelectTrigger className="flex items-center justify-between text-gray-light h-12 min-w-[350px] max-w-[350px]  border border-input bg-white px-3 py-2 text-[14px] ring-offset-[#DBDBDB] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            <SelectValue placeholder="Touts" />
            {/* <Icons.ChevronDown className="h-4 w-4 fill-primary" /> */}
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="bg-white">
              <SelectLabel>hello</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchFilterTable;
