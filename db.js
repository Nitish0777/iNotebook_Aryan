const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017/iNotebook";
// const mongoURI = process.env.MONGO_URL;

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
// Handle connection errors
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

module.exports = connectToMongo;
