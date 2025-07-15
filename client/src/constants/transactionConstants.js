// Transaction Filter Options Constants

export const TRANSACTION_TYPES = [
  { value: "", label: "All Types" },
  { value: "income", label: "Income" },
  { value: "expense", label: "Expense" },
  { value: "transfer", label: "Transfer" },
];

export const TRANSACTION_CATEGORIES = [
  { value: "", label: "All Categories" },
  { value: "food", label: "Food" },
  { value: "transport", label: "Transport" },
  { value: "entertainment", label: "Entertainment" },
  { value: "utilities", label: "Utilities" },
  { value: "healthcare", label: "Healthcare" },
  { value: "shopping", label: "Shopping" },
  { value: "salary", label: "Salary" },
  { value: "business", label: "Business" },
  { value: "education", label: "Education" },
  { value: "investment", label: "Investment" },
  { value: "insurance", label: "Insurance" },
  { value: "rent", label: "Rent" },
  { value: "travel", label: "Travel" },
  { value: "gifts", label: "Gifts" },
  { value: "misc", label: "Miscellaneous" },
];

export const DATE_RANGES = [
  { value: "", label: "All Time" },
  { value: "today", label: "Today" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" },
  { value: "quarter", label: "This Quarter" },
  { value: "year", label: "This Year" },
  { value: "last-week", label: "Last Week" },
  { value: "last-month", label: "Last Month" },
  { value: "last-quarter", label: "Last Quarter" },
  { value: "last-year", label: "Last Year" },
];

export const AMOUNT_RANGES = [
  { value: "", label: "Any Amount" },
  { value: "0-50", label: "$0 - $50" },
  { value: "50-200", label: "$50 - $200" },
  { value: "200-500", label: "$200 - $500" },
  { value: "500-1000", label: "$500 - $1,000" },
  { value: "1000-5000", label: "$1,000 - $5,000" },
  { value: "5000+", label: "$5,000+" },
];

// Default filter state
export const DEFAULT_FILTERS = {
  type: "",
  category: "",
  dateRange: "",
  amountRange: "",
};

// Search placeholder text
export const SEARCH_PLACEHOLDER =
  "Search transactions by title, category, account, or notes...";
