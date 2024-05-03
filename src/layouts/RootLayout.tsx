import { useInitialize } from "hooks";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  useInitialize();

  return (
    <main className={`bg-lightPinkLavender min-h-screen ${openSans.className}`}>
      {children}
    </main>
  );
};
