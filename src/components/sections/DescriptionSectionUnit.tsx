import { cn } from "@/lib/utils";
import * as React from "react";
import { Button } from "../ui/Botton";
import EditModal from "../modal/EditModal";

interface IDescriptionSectionUnitProps {
  title: string;
  content: string;
  buttonType?: string;
  bottom?: boolean;
  edit?: boolean;
}

const DescriptionSectionUnit: React.FunctionComponent<
  IDescriptionSectionUnitProps
> = ({ title, content, buttonType, bottom, edit }) => {
  let borderItemBottom = "";
  if (bottom) {
    borderItemBottom = "border-b-[1px] border-[#EBEBEB] border-solid";
  }

  return (
    <div
      className={cn(
        "flex items-center justify-between w-full px-4 py-6 text-black",
        borderItemBottom
      )}
    >
      <span className="text-[13px] font-bold">{title}</span>
      <div className="flex items-center gap-2">
        {edit && (
          <EditModal
            content="vous allez changer l’email du client Anouar Manaa"
            title="Changer l’email"
          />
        )}
        <span className="text-[13px] font-medium">{content}</span>
        {buttonType && (
          <Button
            className="bg-[#DAFCE3] py-1 px-3 text-green text-[12px] font-bold capitalize "
            variant={"default"}
          >
            {buttonType}
          </Button>
        )}
      </div>
    </div>
  );
};

export default DescriptionSectionUnit;
