import express from "express";
import cors from "cors";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false }, // simple SSL for dev

});

app.get("/api/health", async (req, res) => {
  const result = await pool.query("SELECT NOW() as now");
  res.json({ ok: true, dbTime: result.rows[0].now });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API running on :${port}`));

