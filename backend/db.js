const mongoose = require("mongoose");

// MongoDB Connection URL (Replace with your actual connection string)
const mongoURI =
  "mongodb+srv://sudhakarg:Sudhakarciai@cluster0.g7juk.mongodb.net"; /// For local MongoDB
// const mongoURI = "mongodb+srv://username:password@cluster0.mongodb.net/myDatabase"; // For MongoDB Atlas

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error("MongoDB Connection Error ❌", err));

module.exports = mongoose;
