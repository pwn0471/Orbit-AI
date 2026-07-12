import { useState } from "react";

const useAI = () => {
  const [loading, setLoading] = useState(false);

  const [response, setResponse] = useState("");

  const [error, setError] = useState("");

  const executeAI = async (action, content) => {
    setLoading(true);
    setError("");

    try {
      // API call will be added later

      console.log("AI Action:", action);
      console.log("Content:", content);

      // Dummy response
      setResponse(
        "AI response will appear here after Gemini integration."
      );
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const clearResponse = () => {
    setResponse("");
    setError("");
  };

  return {
    loading,
    response,
    error,
    executeAI,
    clearResponse,
  };
};

export default useAI;