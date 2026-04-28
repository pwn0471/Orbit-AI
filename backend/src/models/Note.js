import mongoose from "mongoose"

const noteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    content: String
}, { timestamps: true })

export default mongoose.model("Note", noteSchema)