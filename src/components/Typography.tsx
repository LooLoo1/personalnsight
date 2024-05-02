import { ComponentPropsWithoutRef } from "react";

const styles: Record<"alert" | "normal", string> = {
  normal: `w-full text-base p-5 text-blackGray bg-lightGray rounded-2xl shadow-purple transition-all 
          hover:text-white hover:bg-transparent focus-visible:text-white focus-visible:bg-transparent

          relative overflow-hidden after:transition-all z-10 disabled:grayscale disabled:opacity-50
          after:content-[''] after:pointer-events-none after:opacity-0 hover:after:opacity-100 focus-visible:after:opacity-100 after:absolute after:inset-0 after:bg-gradient-purple after:z-[-1]`,

  alert: `text-lg p-5 text-purple bg-white rounded-2xl shadow-white transition-all hover:shadow-white2x focus-visible:shadow-white2x`,
};

export const Typography = {
  Title: ({
    children,
    ...rest
  }: { children: React.ReactNode } & ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-blackGray text-2xl font-bold" {...rest}>
      {children}
    </h1>
  ),
  Description: ({
    children,
    ...rest
  }: { children: React.ReactNode } & ComponentPropsWithoutRef<"p">) => (
    <p className="text-blackGray text-lg font-bold" {...rest}>
      {children}
    </p>
  ),
  Button: ({
    children,
    state = "normal",
    onClick,
    ...rest
  }: {
    children: React.ReactNode;
    state?: "alert" | "normal";
    onClick?: () => void;
  } & ComponentPropsWithoutRef<"button">) => (
    <button className={styles[state]} onClick={onClick} {...rest}>
      {children}
    </button>
  ),
};
