import { ReactNode } from "react";
import Navbar from "./_components/Navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}