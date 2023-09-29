import * as React from "react";
import { Button } from "../ui/Botton";
import { Icons } from "../ui/Icons";
import { DeleteItem } from "../modal/DeletItem";

interface ITableActionsProps {
  supp?: boolean;
  edit?: boolean;
  next?: boolean;
}

const TableActions: React.FunctionComponent<ITableActionsProps> = ({
  supp = true,
  edit = true,
  next = true,
}) => {
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

  const EditButton = () => {
    return (
      <Button
        variant="secondary"
        size="icon"
        className="bg-green-light rounded-full text-black w-7 h-7 p-2"
      >
        <Icons.HiOutlinePencil className="w-7 h-7" />
      </Button>
    );
  };

  const NextButton = () => {
    return (
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full bg-main text-white w-7 h-7 p-2"
      >
        <Icons.LiaArrowRightSolid className="w-7 h-7" />
      </Button>
    );
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      {/* this is the delete item modal its a dynamic modal */}

      {supp && (
        <DeleteItem
          action="client"
          title="Supression d’une service"
          content="Etes-vous sur de supprimer cet service?"
        />
      )}

      {edit && <EditButton />}
      {next && <NextButton />}
    </div>
  );
};

export default TableActions;
