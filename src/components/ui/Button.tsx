import { ComponentPropsWithoutRef, memo } from 'react'
import { twMerge } from 'tailwind-merge'
import { ThemeState } from 'types'

const styles: Record<ThemeState, string> = {
  normal: `w-full text-base p-5 text-charcoal bg-ash rounded-2xl shadow-accent transition-all
            hover:text-white hover:bg-transparent focus-visible:text-white focus-visible:bg-transparent

            relative overflow-hidden z-10 disabled:grayscale disabled:opacity-50
            after:transition-all after:content-[''] after:pointer-events-none after:opacity-0 hover:after:opacity-100 
            focus-visible:after:opacity-100 after:absolute after:inset-0 after:bg-gradient-accent after:z-[-1]`,

  alert: `text-lg w-full p-5 text-accent bg-white rounded-2xl shadow-white transition-all hover:shadow-charcoal focus-visible:shadow-charcoal disabled:opacity-50`,
};

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  state?: ThemeState;
};

export const Button = memo(function Button({ state = 'normal', className, ...props }: ButtonProps) {
  return <button className={twMerge(styles[state], className)} {...props} />;
});
