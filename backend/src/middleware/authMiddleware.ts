import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserPayload } from "../interfaces/User";

interface AuthenticatedRequest extends Request {
  user?: UserPayload;
}

export default function authenticateJWT(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const JWT_SECRET = process.env.JWT_SECRET as string;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ message: "Token has expired" });
        }
        return res.status(401).json({ message: "Invalid token" });
      }

      // Type guard to ensure decoded is the correct type. This is important
      // because jwt.verify returns 'any' by default.
      if (typeof decoded === "object" && decoded !== null && "id" in decoded) {
        req.user = decoded as UserPayload;
        next();
      } else {
        return res.status(401).json({ message: "Invalid token payload" });
      }
    });
  } else {
    res.status(401).json({ message: "No JWT provided" });
  }
}
