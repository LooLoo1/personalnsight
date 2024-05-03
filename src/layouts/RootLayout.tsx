import { useInitialize } from "hooks";
import { Open_Sans } from "next/font/google";
import Head from "next/head";

const openSans = Open_Sans({ subsets: ["latin"] });

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  useInitialize();

  return (
    <>
      <Head>
        <title>Personal Nsight</title>
        <link
          rel="icon"
          href="/svg/Logo.svg"
          sizes="any"
          type="image/svg+xml"
        />

        {/* <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        /> */}
        <meta name="theme-color" content="#6A3AA2" />
      </Head>
      <main
        className={`bg-lightPinkLavender min-h-screen ${openSans.className}`}
      >
        {children}
      </main>
    </>
  );
};
