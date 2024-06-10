import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Option from "./components/Option/Oprion";
import Feedback from "./components/Feedback/Feedbakc";

import "./App.css";

function App() {
  const [feedbackStat, setFeedbackStat] = useState(() => {
    if (localStorage.getItem("saved-feedback") !== undefined) {
      return JSON.parse(localStorage.getItem("saved-feedback"));
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback =
    feedbackStat.good + feedbackStat.neutral + feedbackStat.bad;
  const positiveFeedback = Math.round(
    (feedbackStat.good / totalFeedback) * 100
  );

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedbackStat));
  }, [feedbackStat]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType == "good") {
      setFeedbackStat({
        ...feedbackStat,
        good: feedbackStat.good + 1,
      });
    } else if (feedbackType == "neutral") {
      setFeedbackStat({
        ...feedbackStat,
        neutral: feedbackStat.neutral + 1,
      });
    } else if (feedbackType == "bad") {
      setFeedbackStat({
        ...feedbackStat,
        bad: feedbackStat.bad + 1,
      });
    } else if (feedbackType == "clear") {
      setFeedbackStat({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  };

  return (
    <>
      <Description />
      <Option updateFeedback={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback != 0 ? (
        <Feedback
          feedbackStat={feedbackStat}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}

export default App;
