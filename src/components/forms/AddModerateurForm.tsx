"use client";

import * as React from "react";
import { Input } from "../ui/Inputs";
import { PasswordInput } from "../ui/PasswordInput";
import { Checkbox } from "../ui/CheckBox";

interface IAddModerateurFormProps {}

const AddModerateurForm: React.FunctionComponent<IAddModerateurFormProps> = (
  props
) => {
  const [privilege, setPrivilege] = React.useState<boolean>(true);
  const [customPrivilege, setCustomPrivilege] = React.useState<boolean>(false);

  const handelChangePrivilege = () => {
    setPrivilege((prev) => !prev);
    setCustomPrivilege((prev) => !prev);
  };

  const handelCustomPrivilege = () => {
    setPrivilege((prev) => !prev);
    setCustomPrivilege((prev) => !prev);
  };

  return (
    <form action="" className="flex flex-col gap-4">
      <Input placeholder="Nom*" />
      <Input placeholder="Email*" />
      <PasswordInput placeholder="Mot de passe*" />
      <div className="flex flex-col gap-4 py-4 capitalize">
        <div className="flex items-center gap-2">
          <Checkbox
            id="prev"
            checked={privilege}
            onCheckedChange={handelChangePrivilege}
          />
          <span>Toutes les privilèges</span>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="prev"
            checked={customPrivilege}
            onCheckedChange={handelCustomPrivilege}
          />
          <span>des privilèges spécifiques</span>
        </div>
      </div>
      {!privilege && (
        <div className="flex items-center justify-start gap-3 flex-wrap border border-[#E3E3E3] border-solid rounded-[9px] px-5 py-5">
          <div className="flex items-center gap-2">
            <Checkbox id="prev" />
            <span>Gérer les clients</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="prev" />
            <span>Gérer les clients</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="prev" />
            <span>Gérer les clients</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="prev" />
            <span>Gérer les clients</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="prev" />
            <span>Gérer les clients</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="prev" />
            <span>Gérer les clients</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="prev" />
            <span>Gérer les clients</span>
          </div>
        </div>
      )}
    </form>
  );
};

export default AddModerateurForm;
