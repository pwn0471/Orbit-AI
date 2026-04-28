import Problem from "../models/Problem.js"
import Progress from "../models/Progress.js"
import Task from "../models/Task.js"

export const getDashboard = async (req, res) => {
    try {
        const userId = req.user.id

        // =========================
        // 1️⃣ TOTAL SOLVED
        // =========================
        const totalSolved = await Problem.countDocuments({
            userId,
            status: "solved"
        })

        // =========================
        // 2️⃣ WEEKLY DATA (last 7 days)
        // =========================
        const last7 = await Progress.find({ userId })
            .sort({ date: -1 })
            .limit(7)

        const weeklyData = last7
            .map(p => p.solvedCount)
            .reverse()

        // =========================
        // 3️⃣ WEAK TOPICS
        // =========================
        const allProblems = await Problem.find({ userId })

        const topicCount = {}

        allProblems.forEach(p => {
            if (p.status === "unsolved") {
                topicCount[p.topic] = (topicCount[p.topic] || 0) + 1
            }
        })

        const weakTopics = Object.keys(topicCount)
            .sort((a, b) => topicCount[b] - topicCount[a])
            .slice(0, 3)

        // =========================
        // 4️⃣ STREAK CALCULATION
        // =========================
        const allProgress = await Progress.find({ userId })
            .sort({ date: -1 })

        let streak = 0
        const today = new Date()

        for (let i = 0; i < allProgress.length; i++) {
            const progressDate = new Date(allProgress[i].date)

            // difference in days
            const diff = Math.floor(
                (today - progressDate) / (1000 * 60 * 60 * 24)
            )

            if (diff === streak) {
                streak++
            } else {
                break
            }
        }

        // =========================
        // 5️⃣ TODAY TASKS (pending)
        // =========================
        const todayTasks = await Task.countDocuments({
            userId,
            completed: false
        })

        // =========================
        // FINAL RESPONSE
        // =========================
        res.json({
            totalSolved,
            weeklyData,
            weakTopics,
            streak,
            todayTasks
        })

    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}