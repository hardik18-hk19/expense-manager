const AccountSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["Cash", "Bank", "Credit Card", "UPI", "Wallet"],
      required: true,
      default: "Cash",
    },
    balance: {
      type: Number,
      required: true,
      default: 0,
    },
    currency: {
      type: String,
      default: "INR",
    },
    accountNumber: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "💰",
    },
    color: {
      type: String,
      default: "#00b894",
    },
    lastUsedAt: {
      type: Date,
    },
    initialBalanceNote: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Account", AccountSchema);
