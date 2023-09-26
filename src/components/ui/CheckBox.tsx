"use client";

import * as React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Icons } from "./Icons";

export interface ICheckBoxProps {
  label?: string;
  id: string;
}

export default function CheckBox({ label, id }: ICheckBoxProps) {
  return (
    <div className="">
      <Checkbox.Root
        className="w-5 h-5 flex items-center hover:bg-gray-light focus:bg-blue-600 justify-center  border border-[#C3C2C2] border-solid rounded-[4px] "
        id={id}
        // defaultChecked={false}
      >
        <Checkbox.Indicator className="CheckboxIndicator">
          <Icons.RxCheck />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor={id} className="CheckboxLabel">
        {label}
      </label>
    </div>
  );
}
