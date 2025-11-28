import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import connectDB from './config/db.js';
import productRouters from './routes/productRouters.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "https://mega-k-mini-ecommerce-cv4q.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "Cache-Control", "Pragma"],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use('/api', productRouters);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
