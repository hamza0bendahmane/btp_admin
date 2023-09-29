"use client";

import { Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../ui/Botton";

interface IDeleteModerateurModalProps {}

const DeleteModerateurModal: React.FunctionComponent<
  IDeleteModerateurModalProps
> = (props) => {
  const [open, setOpen] = useState(false);
  const handelOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="py-4">
      <Button
        className="bg-red-ban rounded-[2px] text-white font-medium text-sm w-fit"
        variant={"default"}
        onClick={handelOpen}
      >
        Supprimer
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
            <h4 className="text-[13px] font-bold">Supprimer un modérateur</h4>
            <span className="text-[12px] font-normal">
              Etes-vous sur de supprimer le modérateur Anouar Manaa
            </span>

            <div className="flex w-full  py-3">
              <div className="flex items-center gap-2">
                <Button variant={"default"}>Confirm</Button>
                <Button
                  variant={"secondary"}
                  className="border-[1px] border-[#000] border-solid"
                  onClick={handleClose}
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

export default DeleteModerateurModal;
