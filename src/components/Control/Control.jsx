const Controls = ({ addFeedback, options }) => {
  return (
    <>
      <p>Please leave feedback</p>
      {options.map(stat => {
        return (
          <button
            key={stat}
            type="button"
            name={stat}
            onClick={() => {
              addFeedback(stat);
            }}
          >
            {stat}
          </button>
        );
      })}
    </>
  );
};
export default Controls;
