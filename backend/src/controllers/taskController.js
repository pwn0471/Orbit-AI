import Task from "../models/Task.js"

export const createTask = async (req, res) => {
    try {
        const task = await Task.create({
            userId: req.user.id,
            ...req.body
        })
        res.json(task)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id })
        res.json(tasks)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

export const updateTask = async (req, res) => {
    try {
        const updated = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        )
        res.json(updated)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

export const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.json({ msg: "Deleted" })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}