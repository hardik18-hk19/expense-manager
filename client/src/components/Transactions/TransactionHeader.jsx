import React from "react";
import { Button } from "../ui/button";

const TransactionHeader = () => {
  return (
    <div className="flex items-center justify-between m-5">
      <h1 className="text-4xl font-bold"> Transactions</h1>
      <div className="flex gap-5">
        <Button>Add Transaction Account</Button>
        <Button>Add Transaction</Button>
      </div>
    </div>
  );
};

export default TransactionHeader;
