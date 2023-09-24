import * as React from "react";
import { Button } from "../ui/Botton";
import { Icons } from "../ui/Icons";
import { DeleteItem } from "../modal/DeletItem";

interface ITableActionsProps {}

const TableActions: React.FunctionComponent<ITableActionsProps> = (props) => {
  const deleteButton = (handelOpen: () => void) => {
    <Button
      variant="secondary"
      size="icon"
      className="bg-red rounded-full text-red-light w-7 h-7 p-2"
      onClick={handelOpen}
    >
      <Icons.RiDeleteBinLine className="w-7 h-7" />
    </Button>;
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      <DeleteItem />
      <Button
        variant="secondary"
        size="icon"
        className="bg-green-light rounded-full text-black w-7 h-7 p-2"
      >
        <Icons.HiOutlinePencil className="w-7 h-7" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full bg-main text-white w-7 h-7 p-2"
      >
        <Icons.LiaArrowRightSolid className="w-7 h-7" />
      </Button>
    </div>
  );
};

export default TableActions;
