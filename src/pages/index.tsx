import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col p-24 ${openSans.className}`}>
      <h1 className="font-bold">Personalnsight</h1>
      <p>Welcome</p>
    </main>
  );
}
