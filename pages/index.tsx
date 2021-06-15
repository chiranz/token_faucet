import { NavbarPage } from "../src/layout/Navbar";
import { Footer } from "../src/layout/Footer";
import { triggerToast } from "../src/components/Toast";
import { getEtherScanUrl, joinClasses, sleep } from "../helpers";
import { useContext } from "react";
import {
  TransactionContext,
  TransactionContextType,
} from "../src/context/TransactionContext";
import Button from "../src/components/tailwind/Button";
import ToastChild from "../src/components/ToastChild";

// TODO: Show user metamask link to install the wallet
// TODO: Ask for user's permission to connect to the wallet if he clicks connect button.
// TODO: Use global context for TOAST message

export default function Home() {
  const txContext = useContext(TransactionContext) as TransactionContextType;

  const handleTransaction = async () => {
    triggerToast({
      children: <ToastChild message="Transaction Sent" txHash="0xnothing" />,
      type: "info",
      duration: 3000,
    });
    txContext.setPending(true);
    await sleep(6000);
    txContext.setPending(false);
    triggerToast({
      children: <ToastChild message="Transaction Success" txHash="0xnothing" />,
      type: "success",
      duration: 3000,
    });
  };
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl">A NextJs Boilerplate for DAAP Development</h1>
      <p className="mt-6">
        This boiler plate uses Hardhat, Ethers, Tailwindcss, NextJs for DAAP
        Development.
      </p>
      <Button color="success" onClick={handleTransaction} className="mt-6">
        Send Transaction
      </Button>
    </div>
  );
}
