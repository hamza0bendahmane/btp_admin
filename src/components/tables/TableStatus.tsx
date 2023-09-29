import * as React from "react";
import { Button } from "../ui/Botton";

interface ITableStatusProps {
  children?: React.ReactNode;
  type: string;
}

const TableStatus: React.FunctionComponent<ITableStatusProps> = ({
  children,
  type,
}) => {
  const getVariant = (text: string) => {
    if (text === "delete" || text === "retour" || text === "banni") {
      return "red";
    } else if (text === "payer" || text === "disponible" || text === "actif") {
      return "green";
    } else if (text === "en attente") {
      return "orange";
    } else {
      return "yellow";
    }
  };
  return (
    <div className="flex items-center justify-center">
      <Button
        className="py-2 px-4 text-[10px] font-bold"
        variant={getVariant(type)}
      >
        {children}
      </Button>
    </div>
  );
};

export default TableStatus;
