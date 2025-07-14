import mongoose from "mongoose";

// Define the schema
const transactionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId, // Reference to User
      ref: "User",
      required: true,
    },
    account_id: {
      type: mongoose.Schema.Types.ObjectId, // Reference to Account
      ref: "Account",
      required: true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId, // Reference to Category
      ref: "Category",
      required: true,
    },
    type: {
      type: String,
      enum: ["income", "expense", "transfer"], // only these 3 allowed
      required: true,
    },
    amount: {
      type: Number, // Amount should be numeric
      required: true,
    },
    note: {
      type: String,
      default: "",
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

// Export the model
const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
