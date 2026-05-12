import express from "express"
import auth from "../middleware/authMiddleware.js"
import { generatePlan } from "../controllers/aiController.js"
import { chatWithAI } from "../controllers/aiController.js";

const router = express.Router()

router.post("/plan", auth, generatePlan)
router.post("/chat", chatWithAI)

export default router