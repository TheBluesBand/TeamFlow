import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserPayload } from "../../interfaces/User";

const generateJWT = (user: UserPayload) => {
  const JWT_SECRET = process.env.JWT_SECRET as string;

  return jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
};

export function login(req: Request, res: Response) {
  const { username, password } = req.body;

  // Here I would normally validate the user's credentials
  // For demonstration purposes, we'll assume the user is valid until we have a proper DB
  const user: UserPayload = {
    id: "123",
    username,
    password,
  };

  const token = generateJWT(user);
  res.json({ token });
}

export function decodeToken(req: Request, res: Response) {
  const authHeader = req.headers.authorization;
  const JWT_SECRET = process.env.JWT_SECRET as string;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header is missing" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ decoded });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}
