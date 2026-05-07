import cors from "cors";

// Middleware de CORs
export const mcors = cors({
  origin: "http://localhost:5000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});