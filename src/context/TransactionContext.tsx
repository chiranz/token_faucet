import React, { ReactNode, useState } from "react";
type TransactionProps = {
  children: ReactNode;
};

export const TransactionContext = React.createContext(null);

export const TransactionProvider = ({ children }: TransactionProps) => {
  const [pending, setPending] = useState(false);
  const [pendingTxs, setPendingTxs] = useState([]);

  return (
    <TransactionContext.Provider
      value={{ pending, pendingTxs, setPending, setPendingTxs }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
