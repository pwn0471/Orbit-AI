import mongoose from "mongoose"

const problemSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"]
    },
    topic: String,
    status: {
        type: String,
        enum: ["solved", "unsolved"],
        default: "unsolved"
    },
    dateSolved: Date
}, { timestamps: true })

export default mongoose.model("Problem", problemSchema)