import { Header } from 'components'
import Script from "next/script"
import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type LayoutProps = ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode;
};

export const Layout = ({ children, className, ...rest }: LayoutProps) => {
  return (
    <div className={twMerge(`bg-primary min-h-screen h-full`, className)} {...rest}>
      <Header />
      {children}
    </div>
  );
};
