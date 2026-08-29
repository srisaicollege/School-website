import express from "express";
import cors from "cors"
import helmet from "helmet"
import rateLimit from "express-rate-limit"
import contactRouter from "./routers/contact.router.js"
import { errorHandler } from "./middlewares/error.middleware.js"
import { env } from "./config/env.js";

const app = express();

// Security headers
app.use(helmet())

// CORS restriction for frontend
app.use(cors({
    origin: env.frontendUrl || "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true
}))

// Rate limiting (20 requests per 15 mins)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
});

app.use(express.json())

// contact service 
app.use("/api/v1/contact", limiter, contactRouter)

// Global error handling 
app.use(errorHandler)

app.get("/", (req, res) => {
    res.send("Hello world")
})

export default app;