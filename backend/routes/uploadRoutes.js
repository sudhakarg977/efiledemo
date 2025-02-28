import express from "express";

import Upload from "../models/Upload.js";
import { fileURLToPath } from "url";

import dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config();
import multer from "multer";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Files will be stored in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// POST API to handle file upload
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { id, name, taxservice, paymentstatus, status, comments } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "File is required!" });
    }

    const newUpload = new Upload({
      id,
      name,
      taxservice,
      paymentstatus,
      status,
      comments,
      filePath: req.file.path,
      fileName: req.file.filename,
    });

    await newUpload.save();

    res
      .status(201)
      .json({ message: "File uploaded successfully", data: newUpload });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// 📌 API to Fetch All Uploaded Files
router.get("/getuploads", async (req, res) => {
  try {
    const uploads = await Upload.find();
    res.status(200).json(uploads);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve uploads", details: error.message });
  }
});

export default router;
