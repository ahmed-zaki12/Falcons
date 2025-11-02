import "dotenv/config";
import express from "express";
import cors from "cors";
import mailRoutes from "./routes/mailRoutes.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const app = express();

// Set security-related HTTP headers
app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/mail", mailRoutes);

const PORT = process.env.PORT || 5000;
// Quick env presence check (does not print secrets)
console.log("SMTP env present:", {
    INFO_USER: Boolean(process.env.INFO_USER),
    INFO_PASS: Boolean(process.env.INFO_PASS),
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
