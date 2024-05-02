import Image from "next/image";
import Logo from "../../public/Logo.svg";
import Arrow from "../../public/Arrow.svg";

export const Header = () => {
  return (
    <header className="grid grid-cols-3 py-4 px-6 gap-2">
      <button>
        <Image src={Arrow} alt="arrow" width={24} height={24} />
      </button>
      <div className="col-span-1 flex justify-center">
        <Image src={Logo} alt="logo" width={24} height={24} />
      </div>
      {/* <div></div> */}
    </header>
  );
};
