import { ComponentPropsWithoutRef, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"
import { ThemeState } from "types"

const styles: Record<ThemeState, string> = {
  normal: `text-blackGray text-lg font-normal`,
  alert: `text-white text-sm font-normal text-center`,
};
type DescriptionProps = ComponentPropsWithoutRef<"p"> &
  PropsWithChildren & {
    state?: ThemeState;
  };
export const Description = ({
  state = "normal",
  className,
  ...props
}: DescriptionProps) => (
  <p className={twMerge(styles[state], className)} {...props} />
);
