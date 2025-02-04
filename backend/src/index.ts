import express, { Request, Response } from "express";
import authRoutes from "./routes/auth/auth";
import authenticateJWT from "./middleware/authMiddleware";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/login", authRoutes);

app.get("/protected", authenticateJWT, (req: Request, res: Response) => {
  res.json({ message: "Access granted" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
