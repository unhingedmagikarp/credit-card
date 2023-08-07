import Image from "next/image";
import { CreditCard } from "./components/CreditCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CreditCard />
    </main>
  );
}
