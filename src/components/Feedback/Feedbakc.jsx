import PropTypes from "prop-types";

const Feedback = ({ feedbackStat, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good: {feedbackStat.good}</li>
        <li>Neutral: {feedbackStat.neutral}</li>
        <li>Bad: {feedbackStat.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

Feedback.propTypes = {
  feedbackStat: PropTypes.object,
  totalFeedback: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

export default Feedback;
