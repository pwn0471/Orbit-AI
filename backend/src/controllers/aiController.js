import Task from "../models/Task.js";
import { GoogleGenAI } from "@google/genai";

export const generatePlan = async (req, res) => {
  try {
    const { level, topics } = req.body;

    const tasks = [];

    topics.forEach((topic) => {
      tasks.push(`Solve 2 ${topic} problems`);
    });

    tasks.push("Revise yesterday problems");
    tasks.push("1 mock test (30 mins)");

    const savedTasks = await Promise.all(
      tasks.map((t) =>
        Task.create({
          userId: req.user.id,
          title: t,
          source: "AI",
        }),
      ),
    );

    res.json(savedTasks);
  } catch (err) {
    res.status(500).json({
      msg: err.message,
    });
  }
};

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",

      contents: message,

      config: {
        systemInstruction: `
            You are Orbit AI,
            an advanced AI assistant helping students with:

            - DSA
            - MERN Stack
            - Web Development
            - Interview Preparation
            - Placements
            - Resume Building
            - Productivity

            Give clear, practical, and concise answers.

            So u have to answer the user's question based on the above topics and instructions only.
             If the question is not related to the above topics, politely decline to answer starting with 
             "Sorry, I can only assist with topics related to DSA, MERN Stack, Web Development, Interview 
             Preparation, Placements, Resume Building, and Productivity."
          `,
      },
    });

    res.status(200).json({
      reply: response.text,
    });
  } catch (err) {
    console.log("FULL ERROR:", err);

    res.status(500).json({
      msg: err.message,
    });
  }
};
