import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/presentation/shared/components/Header";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-stone-100">
      <Header />
      <main className="flex flex-1 flex-col gap-8 p-8">
        {children}
      </main>
    </div>
  );
}