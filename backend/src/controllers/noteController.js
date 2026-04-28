import Note from "../models/Note.js"

export const createNote = async (req, res) => {
    try {
        const note = await Note.create({
            userId: req.user.id,
            ...req.body
        })
        res.json(note)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ userId: req.user.id })
        res.json(notes)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

export const updateNote = async (req, res) => {
    try {
        const updated = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        )
        res.json(updated)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

export const deleteNote = async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id)
        res.json({ msg: "Deleted" })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}