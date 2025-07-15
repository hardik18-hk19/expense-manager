import TransactionTable from "../components/Transactions/TransactionTable";
import TransactionHeader from "../components/Transactions/TransactionHeader";
import TransactionSearchBar from "../components/Transactions/TransactionSearchBar";
import React, { useState } from "react";

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    category: "",
    dateRange: "",
    amountRange: "",
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
    // TODO: Implement search logic
    console.log("Searching for:", term);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    // TODO: Implement filter logic
    console.log("Applying filters:", newFilters);
  };

  return (
    <div className="m-10 space-y-6">
      <div className="border shadow-2xl rounded-2xl overflow-hidden bg-white/95 backdrop-blur-xl">
        <TransactionHeader />

        {/* Search Bar Section */}
        <div className="px-6 pb-6">
          <TransactionSearchBar
            onSearch={handleSearch}
            onFilter={handleFilter}
          />
        </div>

        <TransactionTable searchTerm={searchTerm} filters={filters} />
      </div>
    </div>
  );
};

export default Transactions;
