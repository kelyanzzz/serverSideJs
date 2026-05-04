import jwt from "jsonwebtoken";
import "dotenv/config";

export const authCheck = (req, res, next) => {
  // Check if Authorization header exists
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Missing Authorization header" });
  }

  // Extract token from "Bearer <token>"
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token missing from Bearer string" });
  }

  // Verify the token
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.auth = { userId: decodedToken.id };
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};