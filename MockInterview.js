import React, { useState } from "react";
import axios from "axios";

const MockInterview = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState(null);

  const startInterview = async () => {
    try {
      const response = await axios.post("http://localhost:5000/mock_interview", {
        keywords: ["Java", "AWS", "Kubernetes"],
      });
      setQuestions(response.data.questions);
    } catch (error) {
      console.error("Error starting mock interview:", error);
    }
  };

  const handleAnswerChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const submitAnswers = async () => {
    try {
      const response = await axios.post("http://localhost:5000/feedback", { answers });
      setFeedback(response.data.feedback);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  return (
    <div>
      <h2>Mock Interview</h2>
      <button onClick={startInterview}>Start Interview</button>
      {questions.map((q, index) => (
        <div key={index}>
          <p>{q}</p>
          <input type="text" onChange={(e) => handleAnswerChange(index, e.target.value)} />
        </div>
      ))}
      <button onClick={submitAnswers}>Submit Answers</button>
      {feedback && <div>Feedback: {feedback}</div>}
    </div>
  );
};

export default MockInterview;
