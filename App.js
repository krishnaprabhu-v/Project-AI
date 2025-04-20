import React from "react";
import ResumeUpload from "./components/ResumeUpload";
import MockInterview from "./components/MockInterview";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div className="App">
      <h1>AI Interview Coach</h1>
      <ResumeUpload />
      <MockInterview />
      <Feedback />
    </div>
  );
}

export default App;
