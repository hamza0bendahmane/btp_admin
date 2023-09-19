import { Button } from "@/components/ui/Botton";
import { Icons } from "@/components/ui/Icons";
import { Input } from "@/components/ui/Inputs";
import Image from "next/image";
import * as React from "react";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="min-w-[1400px] h-[100vh] flex flex-col py-10 items-center bg-[#FCFCFC]">
      <div className="h-[20%] flex items-center justify-center">
        <Icons.BtmLogoDark className="w-[50px] h-[50px]" />
      </div>
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-10 border-[#E5E5E5] rounded-[10px] border-solid border w-[500px]">
          <div className="text-black w-full text-sm font-bold text-center py-10 border-solid border-[#e5e5e5] border-b-[1px] ">
            <h1 className="relative before:absolute before:h-1 before:bg-main before:w-28 before:bottom-0 before:translate-x-[-10px] before:translate-y-2">
              Se connecter
            </h1>
          </div>
          <div className="flex flex-col gap-5 w-fit">
            <div>
              <Input type="text" placeholder="Email" className="w-[380px]" />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Mot de passe"
                className="w-[380px]"
              />
            </div>
            <span className="text-[#08A6FF] font-medium text-xs cursor-pointer ml-2">
              mot de passe oublié ?
            </span>
            <div className="py-6 flex items-center justify-center w-full">
              <Button
                size={"md"}
                variant={"secondary"}
                className="bg-main text-white px-6 py-2 rounded-[21.5px]"
              >
                Se connecter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
