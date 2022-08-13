const Statistics = ({
  title,
  state: { good, bad, neutral },
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <p>{title}</p>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      {countTotalFeedback > 0 ? (
        <p>
          Total: <span>{countTotalFeedback}</span>
        </p>
      ) : (
        ''
      )}
      {countTotalFeedback > 0 ? (
        <p>
          Positive Feedback: <span>{countPositiveFeedbackPercentage} %</span>
        </p>
      ) : (
        ''
      )}
    </>
  );
};

export default Statistics;
