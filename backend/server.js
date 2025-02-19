import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import passport from "passport";
import "./config/passport.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Make sure this matches your frontend URL
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
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// Routes
app.use("/api/auth", authRoutes);

// Handling the Port Issue: If the default port is taken, try another
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.error("❌ Server Error:", err);
  } else {
    console.log(`🚀 Server running on port ${PORT}`);
  }
});
