const Controls = ({ addFeedback, options }) => {
  console.log(options);
  return (
    <>
      <p>Please leave feedback</p>
      {options.map(stat => {
        const { title, lc } = stat;
        return (
          <button
            key={title}
            type="button"
            name={lc}
            onClick={() => {
              addFeedback(lc);
            }}
          >
            {title}
          </button>
        );
      })}
    </>
  );
};
export default Controls;
