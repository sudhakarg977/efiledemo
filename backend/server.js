import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import passport from "passport";
import "./config/passport.js";
import path from "path";

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://efiledemo-sudhakars-projects-422a99c0.vercel.app",
      "https://efiledemo.vercel.app",
    ],
    // Make sure this matches your frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Security Headers - REMOVE MANUAL CORS SETTINGS
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  // Removed: res.setHeader("Access-Control-Allow-Origin", "*");
  // Removed: res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  // Removed: res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 30000, // Increase timeout
    connectTimeoutMS: 30000,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.get("/api/db-check", async (req, res) => {
  try {
    const isConnected = mongoose.connection.readyState;
    if (isConnected === 1) {
      res.json({ status: "MongoDB Connected" });
    } else {
      res.json({ status: "MongoDB Not Connected" });
    }
  } catch (error) {
    res.json({ status: "Error checking MongoDB", error });
  }
});
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

// Handling the Port Issue: If the default port is taken, try another
const PORT = process.env.PORT || 10000;

app.listen(PORT, (err) => {
  if (err) {
    console.error("❌ Server Error:", err);
  } else {
    console.log(`🚀 Server running on port ${PORT}`);
  }
});
