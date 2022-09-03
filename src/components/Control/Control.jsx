const Controls = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <p>Please leave feedback</p>
      {options.map(stat => {
        return (
          <button
            key={stat}
            type="button"
            onClick={() => onLeaveFeedback(stat)}
          >
            {stat}
          </button>
        );
      })}
    </>
  );
};
export default Controls;
