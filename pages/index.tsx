import Head from "next/head";
import { NavbarPage } from "../src/layout/Navbar";
import { Footer } from "../src/layout/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <NavbarPage />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl">A NextJs Boilerplate for DAAP Development</h1>
        <p className="mt-6">
          This boiler plate uses Hardhat, Ethers, Tailwindcss, NextJs for DAAP
          Development.
        </p>
      </div>
      <Footer />
    </div>
  );
}
