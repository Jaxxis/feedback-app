import React from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
        <Header/>
        <div className= 'container'>
             <FeedbackList feedback={feedback}/>
        </div>
    </>
  );
}

export default App;
