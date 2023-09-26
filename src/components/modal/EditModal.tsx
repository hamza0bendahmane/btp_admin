"use client";

import { Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../ui/Botton";
import { Icons } from "../ui/Icons";
import { Input } from "../ui/Inputs";

interface IEditModalProps {
  title: string;
  content: string;
}

const EditModal: React.FunctionComponent<IEditModalProps> = ({
  title,
  content,
}) => {
  const [open, setOpen] = useState(false);
  const handelOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="secondary" size="icon" className="" onClick={handelOpen}>
        <Icons.EditPencil className="w-3 h-3" />
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
            <h4 className="text-[13px] font-bold">{title}</h4>
            <span className="text-[12px] font-normal">{content}</span>

            {/* this is the client ban form */}
            <Input placeholder="Nouveau Email*" className="" />

            <div className="flex items-center justify-end gap-2">
              <Button
                variant={"secondary"}
                className="border-[1px] border-[#000] border-solid"
                onClick={handleClose}
              >
                Annuler
              </Button>
              <Button variant={"default"}>Confirm</Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditModal;
