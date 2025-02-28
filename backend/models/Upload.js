import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  taxservice: { type: String, required: true },
  paymentstatus: { type: String, default: "Incompleted" },
  status: { type: String, default: "open" },
  comments: { type: String, default: "" },
  filePath: { type: String, required: true },
  fileName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Upload = mongoose.model("Upload", uploadSchema);
export default Upload;
