const Controls = addFeedback => {
  return (
    <>
      <p>Please leave feedback</p>
      <button
        type="button"
        name="good"
        onClick={() => {
          addFeedback.addFeedback('good');
        }}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={() => {
          addFeedback.addFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={() => {
          addFeedback.addFeedback('bad');
        }}
      >
        Bad
      </button>
    </>
  );
};
export default Controls;
