"use client";

import { Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../ui/Botton";
import { Icons } from "../ui/Icons";
import BanUserTextArea from "../forms/BanUserTextArea";

export interface IDeleteItemProps {
  //   deleteButton: (() => void) => React.ReactNode;
  action: "client" | "user";
  title: string;
  content: string;
}

export function DeleteItem({ action, title, content }: IDeleteItemProps) {
  const [open, setOpen] = useState(false);
  const handelOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   const Content = () => deleteButton(handelOpen);

  return (
    <div>
      <Button
        variant="secondary"
        size="icon"
        className="bg-red rounded-full text-red-light w-7 h-7 p-2"
        onClick={handelOpen}
      >
        <Icons.RiDeleteBinLine className="w-7 h-7" />
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

            {action === "client" && <BanUserTextArea />}

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
      </Modal>
    </div>
  );
}
