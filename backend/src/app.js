import express from "express"
import cors from "cors"
import helmet from "helmet"

import authRoutes from "./routes/authRoutes.js"
import problemRoutes from "./routes/problemRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js"
import taskRoutes from "./routes/taskRoutes.js"
import aiRoutes from "./routes/aiRoutes.js"
import noteRoutes from "./routes/noteRoutes.js"
import errorHandler from "./middleware/errorMiddleware.js"
import userRoutes from "./routes/userRoutes.js"
import statsRoutes from "./routes/statsRoutes.js"



const app = express()
const allowedOrigins = [
  "http://localhost:5173",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an Origin header (e.g. Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(helmet())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/problems", problemRoutes)
app.use("/api/dashboard", dashboardRoutes)
app.use("/api/tasks", taskRoutes)
app.use("/api/ai", aiRoutes)
app.use("/api/notes", noteRoutes)
app.use("/api/users", userRoutes)
app.use("/api/stats", statsRoutes)

app.use(errorHandler)



app.get("/", (req, res) => {
    res.send("API Running ")
})

export default app