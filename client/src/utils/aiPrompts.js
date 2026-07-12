export const AI_PROMPTS = {
  summarize: (note) => `
You are an AI study assistant.

Summarize the following note into concise, easy-to-read bullet points.

Rules:
- Keep important concepts.
- Use simple language.
- Do not remove key information.
- Format using bullet points.

Note:
${note}
`,

  explain: (note) => `
You are an expert teacher.

Explain the following note in simple language suitable for a student learning the topic for the first time.

Rules:
- Use examples whenever possible.
- Keep the explanation clear and beginner-friendly.
- Preserve technical accuracy.

Note:
${note}
`,

  improve: (note) => `
You are an academic writing assistant.

Improve the following note.

Rules:
- Correct grammar.
- Improve sentence structure.
- Improve readability.
- Preserve the original meaning.
- Use headings and bullet points where appropriate.

Note:
${note}
`,

  flashcards: (note) => `
Generate flashcards from the following note.

Return the result as:

Question:
Answer:

Note:
${note}
`,

  quiz: (note) => `
Generate 10 multiple-choice questions based on the following note.

Each question should include:
- Question
- Four options
- Correct answer

Note:
${note}
`,
};