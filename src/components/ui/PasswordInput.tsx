"use client";

import { forwardRef, useState } from "react";
import { Input, type InputProps } from "./Inputs";
import { cn } from "@/lib/utils";
import { Button } from "./Botton";
import { Icons } from "./Icons";

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          ref={ref}
          className={cn("pr-10", className)}
          {...props}
        />
        <Button
          type="button"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-2 bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={props.value === "" || props.disabled}
        >
          {showPassword ? (
            <Icons.GoEyeClosed
              className="h-5 w-5 text-label text-black"
              aria-hidden="true"
            />
          ) : (
            <Icons.RxEyeOpen
              className="h-5 w-5 text-label text-black "
              aria-hidden="true"
            />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
