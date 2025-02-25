import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    middleName: { type: String, trim: true },
    fatherName: { type: String, trim: true },
    dob: { type: Date },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    maritalStatus: {
      type: String,
      enum: ["Married", "Unmarried", "Prefer not to disclose"],
    },

    // Authentication Fields
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    password: { type: String },
    googleId: { type: String }, // For OAuth users

    // Verification
    verificationCode: { type: String },
    isVerified: { type: Boolean, default: false },

    // Document Upload Fields
    documentPath: { type: String }, // File URL/path
    documentName: { type: String, trim: true },
    documentType: { type: String, trim: true }, // MIME type (e.g., 'image/png', 'application/pdf')
    documentSize: { type: Number }, // File size in bytes

    // Admin Approval Status
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },

    // Timestamps
  },
  { timestamps: true } // Auto adds createdAt & updatedAt fields
);

const User = mongoose.model("User", userSchema);
export default User;
