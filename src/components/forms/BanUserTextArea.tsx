import { Input } from "@mui/material";
import * as React from "react";

interface IBanUserTextAreaProps {}

const BanUserTextArea: React.FunctionComponent<IBanUserTextAreaProps> = (
  props
) => {
  return (
    <>
      <textarea
        name=""
        id=""
        cols={20}
        rows={9}
        placeholder="Details..."
        className="border-[1px] border-[#B0B0B0] border-solid p-2 outline-none rounded-[10px] bg-white placeholder:text-[#CDCDCD] text-black text-[12px] resize-none font-normal"
      ></textarea>
    </>
  );
};

export default BanUserTextArea;
