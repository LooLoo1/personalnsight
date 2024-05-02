import { Open_Sans } from "next/font/google";
import { Header } from "./Header";

const openSans = Open_Sans({ subsets: ["latin"] });

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`bg-lightPinkLavender min-h-screen ${openSans.className}`}>
      <Header />
      {children}
    </main>
  );
};
