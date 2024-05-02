import { ComponentPropsWithoutRef } from "react";
import { Header } from "./Header";
import { twMerge } from "tailwind-merge";

export const Layout = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(`bg-lightPinkLavender min-h-screen`, className)}
      {...rest}
    >
      <Header />
      {children}
    </div>
  );
};
