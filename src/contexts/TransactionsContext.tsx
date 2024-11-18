import { createContext, ReactNode, useEffect, useState } from "react";

interface TransactionContextType {
  transactions: Transaction[];
}

interface Transaction {
  id: number;
  price: number;
  type: "income" | "outcome";
  description: string;
  createdAt: string;
  category: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function requestTransactions() {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }

  useEffect(() => {
    requestTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
