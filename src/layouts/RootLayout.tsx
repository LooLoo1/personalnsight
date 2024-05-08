import { Open_Sans } from 'next/font/google'
import Head from 'next/head'
import { useInitialize } from 'hooks'

const openSans = Open_Sans({ subsets: ['latin'] });

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  useInitialize();

  return (
    <>
      <Head>
        <title>Personal Nsight</title>
        <link rel="icon" href="/svg/Logo.svg" sizes="any" type="image/svg+xml" />
        <meta name="theme-color" content="#6A3AA2" />
      </Head>
      <main className={`bg-primary min-h-screen h-screen ${openSans.className}`}>{children}</main>
    </>
  );
};
