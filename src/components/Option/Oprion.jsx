import PropTypes from "prop-types";

const Option = ({ updateFeedback, totalFeedback }) => {
  return (
    <div>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback != 0 ? (
        <button
          onClick={() => {
            updateFeedback("clear");
          }}
        >
          Reset
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

Option.propTypes = {
  updateFeedback: PropTypes.func,
  totalFeedback: PropTypes.number,
};

export default Option;
