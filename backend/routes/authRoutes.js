import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import crypto from "crypto";
import passport from "passport";
dotenv.config();

import { OAuth2Client } from "google-auth-library";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const router = express.Router();

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password or App Password
  },
});

// Function to send welcome email
const sendWelcomeEmail = async (email, name) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Our Platform!",
      html: `<h2>Welcome, ${name}!</h2><p>Thank you for signing up. We're excited to have you on board!</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Welcome email sent to", email);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password.trim(), 10);
    console.log("Hashed password:", hashedPassword);
    user = new User({ fullName, email, password: hashedPassword });

    await user.save();
    console.log("User saved, sending welcome email...");
    await sendWelcomeEmail(email, fullName);
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(
      password.trim(),
      user.password.toString()
    );
    console.log("Password match:", isMatch);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Google Authentication Route
router.post("/google-login", async (req, res) => {
  const { tokenId } = req.body;

  if (!tokenId) {
    return res.status(400).json({ message: "Token ID missing" });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { name, email, sub: googleId } = payload;

    let user = await User.findOne({ email });
    let isNewUser = false;

    if (!user) {
      user = new User({ fullName: name, email, googleId });
      await user.save();
      isNewUser = true;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send welcome email only if the user is new
    if (isNewUser) {
      await sendWelcomeEmail(email, name);
    }

    res.json({ token, user: { fullName: user.fullName, email: user.email } });
  } catch (error) {
    console.error("Google verification error:", error);
    res.status(500).json({ message: "Google authentication failed" });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});

const upload = multer({ storage });
router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.json({
    fileName: req.file.filename,
    filePath: `/uploads/${req.file.filename}`,
  });
});

router.get("/uploads", (req, res) => {
  fs.readdir("uploads", (err, files) => {
    if (err) return res.status(500).json({ message: "Error fetching files" });

    const fileList = files.map((file) => ({
      fileName: file,
      filePath: `/uploads/${file}`,
    }));
    res.json(fileList);
  });
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Route to get list of uploaded files
router.get("/files", (req, res) => {
  const uploadDir = path.join(__dirname, "../uploads");
  // Path to the uploads folder

  // Read the directory to get the list of files
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Unable to read files", error: err.message });
    }

    // Create file list with names and URLs
    const fileList = files.map((file) => ({
      name: file,
      url: `/uploads/${file}`, // Public URL to access the file
    }));

    res.json(fileList);
  });
});

export default router;
