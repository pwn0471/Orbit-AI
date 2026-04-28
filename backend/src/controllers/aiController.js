import Task from "../models/Task.js"

export const generatePlan = async (req, res) => {
    try {
        const { level, topics } = req.body

        // simple AI logic (baad me OpenAI laga sakte ho)
        const tasks = []

        topics.forEach(topic => {
            tasks.push(`Solve 2 ${topic} problems`)
        })

        tasks.push("Revise yesterday problems")
        tasks.push("1 mock test (30 mins)")

        // DB me save karo
        const savedTasks = await Promise.all(
            tasks.map(t =>
                Task.create({
                    userId: req.user.id,
                    title: t,
                    source: "AI"
                })
            )
        )

        res.json(savedTasks)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}