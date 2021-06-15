import React, { ReactElement } from "react";
import { getEtherScanUrl } from "../../helpers";

interface ToastChildProps {
  message: string;
  txHash: string;
}

export default function ToastChild({
  message,
  txHash,
}: ToastChildProps): ReactElement {
  return (
    <div>
      {message}{" "}
      <a
        href={getEtherScanUrl(txHash)}
        target="_blank"
        className="text-blue-800 underline"
      >
        etherscan
      </a>
    </div>
  );
}
