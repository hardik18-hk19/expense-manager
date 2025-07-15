import React, { useState } from "react";
import { Search, X, Filter, Calendar, DollarSign } from "lucide-react";
import {
  TRANSACTION_TYPES,
  TRANSACTION_CATEGORIES,
  DATE_RANGES,
  AMOUNT_RANGES,
  DEFAULT_FILTERS,
  SEARCH_PLACEHOLDER,
} from "../../constants/transactionConstants";

const TransactionSearchBar = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    if (onSearch) {
      onSearch("");
    }
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    if (onFilter) {
      onFilter(newFilters);
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Main Search Bar */}
      <div className="relative group">
        {/* Gradient background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative bg-white/95 backdrop-blur-xl border border-purple-100/50 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 via-pink-50/20 to-indigo-50/30"></div>

          <div className="relative flex items-center p-4">
            {/* Search Icon */}
            <div className="flex-shrink-0 mr-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-sm opacity-20"></div>
                <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 p-2 rounded-xl">
                  <Search className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            {/* Search Input */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={SEARCH_PLACEHOLDER}
              className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 border-none outline-none text-lg font-medium"
            />

            {/* Clear Button */}
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="flex-shrink-0 ml-2 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 rounded-xl transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            )}

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex-shrink-0 ml-2 p-2 rounded-xl transition-all duration-200 ${
                showFilters
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-gray-600 hover:bg-gray-100/50"
              }`}
            >
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-indigo-500/5 rounded-2xl blur-xl"></div>

          <div className="relative bg-white/95 backdrop-blur-xl border border-purple-100/50 rounded-2xl shadow-xl p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50/20 via-pink-50/15 to-indigo-50/20 rounded-2xl"></div>

            <div className="relative">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-purple-600" />
                Advanced Filters
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Transaction Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transaction Type
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) => handleFilterChange("type", e.target.value)}
                    className="w-full bg-white/80 border border-gray-200 rounded-xl px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200"
                  >
                    {TRANSACTION_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                    className="w-full bg-white/80 border border-gray-200 rounded-xl px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200"
                  >
                    {TRANSACTION_CATEGORIES.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    Date Range
                  </label>
                  <select
                    value={filters.dateRange}
                    onChange={(e) =>
                      handleFilterChange("dateRange", e.target.value)
                    }
                    className="w-full bg-white/80 border border-gray-200 rounded-xl px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200"
                  >
                    {DATE_RANGES.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Amount Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <DollarSign className="h-4 w-4 inline mr-1" />
                    Amount Range
                  </label>
                  <select
                    value={filters.amountRange}
                    onChange={(e) =>
                      handleFilterChange("amountRange", e.target.value)
                    }
                    className="w-full bg-white/80 border border-gray-200 rounded-xl px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-200"
                  >
                    {AMOUNT_RANGES.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Clear Filters Button */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => {
                    setFilters(DEFAULT_FILTERS);
                    if (onFilter) {
                      onFilter(DEFAULT_FILTERS);
                    }
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100/50 rounded-xl transition-all duration-200"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionSearchBar;
