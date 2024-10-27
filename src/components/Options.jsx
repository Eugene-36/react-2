function Options({ fc, totalFeedback }) {
  return (
    <div>
      <button onClick={() => fc('good')}>Good</button>
      <button onClick={() => fc('bad')}>Bad</button>
      <button onClick={() => fc('neutral')}>Neutral</button>
      {totalFeedback > 0 ? (
        <button onClick={() => fc('reset')}>Reset</button>
      ) : (
        ''
      )}
    </div>
  );
}

export default Options;
