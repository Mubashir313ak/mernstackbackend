const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();

console.log(`MONGO_URI: ${process.env.MONGO_URI}`);
console.log(`PORT: ${process.env.PORT}`);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use(express.json());

app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started at ${PORT} `));
