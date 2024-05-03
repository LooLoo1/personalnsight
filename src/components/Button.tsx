import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { ThemeState } from "types";

const styles: Record<ThemeState, string> = {
  normal: `w-full text-base p-5 text-blackGray bg-lightGray rounded-2xl shadow-purple transition-all
            hover:text-white hover:bg-transparent focus-visible:text-white focus-visible:bg-transparent

            relative overflow-hidden after:transition-all z-10 disabled:grayscale disabled:opacity-50
            after:content-[''] after:pointer-events-none after:opacity-0 hover:after:opacity-100 focus-visible:after:opacity-100 after:absolute after:inset-0 after:bg-gradient-purple after:z-[-1]`,

  alert: `text-lg w-full p-5 text-purple bg-white rounded-2xl shadow-white transition-all hover:shadow-white2x focus-visible:shadow-white2x disabled:opacity-50`,
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  state?: ThemeState;
};

export const Button = ({
  state = "normal",
  className,
  ...props
}: ButtonProps) => (
  <button className={twMerge(styles[state], className)} {...props} />
);
