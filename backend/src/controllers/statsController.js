import Problem from "../models/Problem.js"

export const getStats = async (req, res) => {
    const userId = req.user.id

    const total = await Problem.countDocuments({ userId })

    const solved = await Problem.countDocuments({
        userId,
        status: "solved"
    })

    const easy = await Problem.countDocuments({
        userId,
        difficulty: "easy",
        status: "solved"
    })

    const medium = await Problem.countDocuments({
        userId,
        difficulty: "medium",
        status: "solved"
    })

    const hard = await Problem.countDocuments({
        userId,
        difficulty: "hard",
        status: "solved"
    })

    res.json({
        total,
        solved,
        easy,
        medium,
        hard
    })
}