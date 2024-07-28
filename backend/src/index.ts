import express from "express";
import dotenv from "dotenv";
import pool from "./config/db";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", taskRoutes);

app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS solution");
    res.json({
      message: "Database connection successful",
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).json({ message: "Database connection failed", error });
  }
});

app.get("/", (req, res) => {
  res.send("Hello world...");
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
