import { NavbarPage } from "../src/layout/Navbar";
import { Footer } from "../src/layout/Footer";
import { triggerToast } from "../src/components/Toast";
import { getEtherScanUrl, sleep } from "../helpers";
import { useContext } from "react";
import { TransactionContext } from "../src/context/TransactionContext";
import Button from "../src/components/tailwind/Button";

// TODO: Show user metamask link to install the wallet
// TODO: Ask for user's permission to connect to the wallet if he clicks connect button.
// TODO: Use global context for TOAST message

export default function Home() {
  const txContext = useContext(TransactionContext);

  const handleTransaction = async () => {
    triggerToast({
      children: (
        <div>
          Transaction sent.
          <a
            href={getEtherScanUrl("0xhash")}
            target="_blank"
            className="text-blue-800"
          >
            {" "}
            Link here
          </a>
        </div>
      ),
      type: "info",
      duration: 3000,
    });
    txContext.setPending(true);
    await sleep(6000);
    txContext.setPending(false);
    triggerToast({
      children: (
        <div>
          Transaction sent.
          <a
            href={getEtherScanUrl("0xhash")}
            target="_blank"
            className="text-blue-800"
          >
            {" "}
            Link here
          </a>
        </div>
      ),
      type: "success",
      duration: 4000,
    });
  };
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl">A NextJs Boilerplate for DAAP Development</h1>
      <p className="mt-6">
        This boiler plate uses Hardhat, Ethers, Tailwindcss, NextJs for DAAP
        Development.
      </p>
      <Button
        className="mt-4 bg-green-500 outline-none focus:outline-none"
        onClick={handleTransaction}
      >
        Send Transaction
      </Button>
    </div>
  );
}
