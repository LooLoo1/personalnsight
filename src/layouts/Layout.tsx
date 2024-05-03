import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { Header } from "components";

type LayoutProps = ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode;
};

export const Layout = ({ children, className, ...rest }: LayoutProps) => {
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
