"use client";

import { Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../ui/Botton";

interface IModalAddModerateurProps {
  children: React.ReactNode;
}

const ModalAddModerateur: React.FunctionComponent<IModalAddModerateurProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const handelOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        className="rounded-none gap-2 capitalize font-medium px-6"
        onClick={handelOpen}
      >
        Ajouter un modérateur
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <div className="flex items-center justify-center  ">
          <div className="flex flex-col gap-5 bg-white p-5 text-black w-[550px]">
            <h4 className="text-[13px] font-bold">Ajouter un modérateur</h4>
            <span className="text-[12px] font-normal">
              Ajouter les informations du modérateur il vous plaît
            </span>

            {/* this is the form section */}
            {children}
            <div className="flex w-full justify-end py-3 px-4">
              <div className="flex items-center gap-2">
                <Button variant={"default"}>Confirm</Button>
                <Button
                  variant={"secondary"}
                  className="border-[1px] border-[#000] border-solid"
                  // onClick={handleClose}
                >
                  Annuler
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalAddModerateur;
