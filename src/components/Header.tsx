import { useSelector } from "hooks";
import Image from "next/image";
import Arrow from "public/svg/Arrow.svg";
import Logo from "public/svg/Logo.svg";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Header = ({ className }: ComponentPropsWithoutRef<"header">) => {
  const inProcess = useSelector(({ questionnaire }) => questionnaire.inProcess);

  return (
    <header className={twMerge("grid grid-cols-3 py-4 px-6 gap-2", className)}>
      {inProcess && (
        <button>
          <Image src={Arrow} alt="arrow" width={24} height={24} />
        </button>
      )}
      <div className="col-start-2 col-span-1 flex justify-center">
        <Image src={Logo} alt="logo" width={24} height={24} />
      </div>
    </header>
  );
};
