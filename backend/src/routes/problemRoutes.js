import express from "express"
import auth from "../middleware/authMiddleware.js"
import {
    addProblem,
    getProblems,
    updateProblem,
    deleteProblem
} from "../controllers/problemController.js"

const router = express.Router()

router.use(auth)

router.post("/", addProblem)
router.get("/", getProblems)
router.put("/:id", updateProblem)
router.delete("/:id", deleteProblem)

export default router