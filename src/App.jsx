import { useState, useEffect } from 'react';
import Description from './components/Description.jsx';
import Options from './components/Options.jsx';
import Feedback from './components/Feedback.jsx';

function App() {
  const [digits, useDigits] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem('items');
    const initialValue = JSON.parse(saved);
    return initialValue || { good: 0, bad: 0, neutral: 0 };
  });
  const total = digits.good + digits.bad + digits.neutral;
  const positiveFeedback = Math.round((digits.good / total) * 100);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(digits));
  }, [digits]);

  const updateFeedback = (feedbackType) => {
    // Тут використовуй сеттер, щоб оновити стан
    switch (feedbackType) {
      case 'good':
        useDigits({
          ...digits,
          good: digits.good + 1,
        });
        break;

      case 'bad':
        useDigits({
          ...digits,
          bad: digits.bad + 1,
        });
        break;

      case 'neutral':
        useDigits({
          ...digits,
          neutral: digits.neutral + 1,
        });
        break;

      case 'reset':
        useDigits({ good: 0, neutral: 0, bad: 0 });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Description />
      <Options fc={updateFeedback} totalFeedback={total} />
      {total > 0 ? (
        <Feedback
          state={digits}
          totalFeedback={total}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        'Not feedback yet'
      )}
    </>
  );
}

export default App;
