import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
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

// router.post("/signup", async (req, res) => {
//   const { fullName, email, password } = req.body;

//   try {
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password.trim(), 10);
//     console.log("Hashed password:", hashedPassword);
//     user = new User({ fullName, email, password: hashedPassword });

//     await user.save();
//     console.log("User saved, sending welcome email...");
//     await sendWelcomeEmail(email, fullName);
//     res.json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });
router.post("/signup", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      isVerified: false, // Default: not verified
    });

    await newUser.save();

    // Generate verification token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send verification email
    const verificationLink = `https://efiledemo-3.onrender.com/api/auth/verify/${token}`;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify Your Email",
      html: `<h2>Welcome ${fullName}!</h2>
             <p>Click the link below to verify your email:</p>
             <a href="${verificationLink}">Verify Email</a>
             <p>This link expires in 1 hour.</p>`,
    });

    res.status(201).json({
      message:
        "User registered! Please check your email to verify your account.",
    });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

// Email Verification Route
router.get("/verify/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ email: decoded.email });
    if (!user) return res.status(400).json({ message: "Invalid token" });

    user.isVerified = true;
    await user.save();

    res.send("<h2>Email verified successfully! You can now log in.</h2>");
  } catch (error) {
    res.status(400).json({ message: "Invalid or expired token" });
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

    res.json({ message: "Login successful", token, user });
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

    res.json({ token, user });
  } catch (error) {
    console.error("Google verification error:", error);
    res.status(500).json({ message: "Google authentication failed" });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
router.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.json({
    message: "File uploaded successfully",
    fileUrl: `/uploads/${req.file.filename}`, // Return the uploaded file URL
  });
});

// Route to get list of uploaded files
router.get("/api/files", (req, res) => {
  const uploadDir = path.join(__dirname, "uploads");
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: "Unable to read files" });
    }

    const fileList = files.map((file) => ({
      name: file,
      url: `/uploads/${file}`,
    }));

    res.json(fileList);
  });
});

export default router;
