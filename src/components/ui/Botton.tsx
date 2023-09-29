import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const buttonVariants = cva(
  "flex items-center justify-center text-sm font-semibold rounded-[21px]",
  {
    variants: {
      variant: {
        default: "bg-main text-white ",
        secondary: "bg-bg_primary text-primary",
        green: "text-[#50FA00] bg-[#DAFCE3] ",
        yellow: "text-black bg-[#FAFBC2]",
        orange: "bg-[#FAFBC2] text-[#FF9900]",
        red: "bg-[#FFEDED] text-[#FF0000]",
      },
      size: {
        sm: "h-9 px-4 ",
        md: "h-10 px-[1.625rem]",
        lg: "h-9 px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
