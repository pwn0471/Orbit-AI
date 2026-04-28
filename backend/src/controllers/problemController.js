import Problem from "../models/Problem.js"
import Progress from "../models/Progress.js"

export const addProblem = async (req, res) => {
  try {
    let problems;

    // अगर req.body एक array है → multiple insert
    if (Array.isArray(req.body)) {
      // हर problem में userId जोड़ें
      const problemsWithUser = req.body.map(p => ({
        userId: req.user.id,
        ...p
      }));

      problems = await Problem.insertMany(problemsWithUser);

      // progress update (अगर किसी problem का status solved है)
      const today = new Date().toISOString().slice(0, 10);
      const solvedCount = problemsWithUser.filter(p => p.status === "solved").length;

      if (solvedCount > 0) {
        let progress = await Progress.findOne({ userId: req.user.id, date: today });
        if (!progress) {
          progress = await Progress.create({
            userId: req.user.id,
            date: today,
            solvedCount
          });
        } else {
          progress.solvedCount += solvedCount;
          await progress.save();
        }
      }
    } else {
      // Single problem insert
      const problem = await Problem.create({
        userId: req.user.id,
        ...req.body
      });
      problems = problem;

      if (req.body.status === "solved") {
        const today = new Date().toISOString().slice(0, 10);
        let progress = await Progress.findOne({ userId: req.user.id, date: today });
        if (!progress) {
          progress = await Progress.create({
            userId: req.user.id,
            date: today,
            solvedCount: 1
          });
        } else {
          progress.solvedCount += 1;
          await progress.save();
        }
      }
    }

    res.json(problems);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};


export const getProblems = async (req, res) => {
    try {
        const { topic, difficulty, status, search } = req.query

        let query = { userId: req.user.id }

        if (topic) query.topic = topic
        if (difficulty) query.difficulty = difficulty
        if (status) query.status = status

        if (search) {
            query.title = { $regex: search, $options: "i" }
        }

        const problems = await Problem.find(query)

        res.json({
            success: true,
            data: problems
        })

    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

export const updateProblem = async (req, res) => {
    try {
        const existing = await Problem.findById(req.params.id)

        const updated = await Problem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        )

        // 👇 check transition
        if (
            existing.status !== "solved" &&
            req.body.status === "solved"
        ) {
            const today = new Date().toISOString().slice(0, 10)

            let progress = await Progress.findOne({
                userId: req.user.id,
                date: today
            })

            if (!progress) {
                await Progress.create({
                    userId: req.user.id,
                    date: today,
                    solvedCount: 1
                })
            } else {
                progress.solvedCount += 1
                await progress.save()
            }
        }

        res.json(updated)

    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

export const deleteProblem = async (req, res) => {
    try {
        await Problem.findByIdAndDelete(req.params.id)
        res.json({ msg: "Deleted" })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}