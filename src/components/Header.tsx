import { useSelector } from "hooks/useRedux";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import Arrow from "../../public/Arrow.svg";
import Logo from "../../public/Logo.svg";

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
