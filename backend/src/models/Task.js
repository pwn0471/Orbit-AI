import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    dueDate: Date,
    source: {
        type: String,
        enum: ["manual", "AI"],
        default: "manual"
    }
}, { timestamps: true })

export default mongoose.model("Task", taskSchema)