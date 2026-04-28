import mongoose from "mongoose"

const progressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: String   // "2026-04-28"
    },
    solvedCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

export default mongoose.model("Progress", progressSchema)