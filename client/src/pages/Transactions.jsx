import TransactionTable from "../components/Transactions/TransactionTable";
import TransactionHeader from "../components/Transactions/TransactionHeader";
import React from "react";

const Transactions = () => {
  return (
    <div className="m-10 border shadow-2xl">
      <TransactionHeader />
      <TransactionTable />
    </div>
  );
};

export default Transactions;
