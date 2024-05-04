import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { ThemeState } from "types";

const styles: Record<ThemeState, string> = {
  normal: `text-blackGray text-2xl font-bold`,
  alert: `text-white text-2xl font-bold text-center`,
};
type TitleProps = ComponentPropsWithoutRef<"h1"> &
  PropsWithChildren & {
    state?: ThemeState;
  };
export const Title = ({
  state = "normal",
  className,
  ...props
}: TitleProps) => (
  <h1 className={twMerge(styles[state], className)} {...props} />
);
