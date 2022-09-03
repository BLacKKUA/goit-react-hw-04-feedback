import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Controls from './Control/Control';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = Number(good) + Number(neutral) + Number(bad);
  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );

  const onLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      default:
        throw new Error(`Error, Idk ${type}`);
    }
  };

  return (
    <>
      <Controls
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
      {good > 0 || bad > 0 || neutral > 0 ? (
        <Statistics
          title={'Statistics'}
          good={good}
          bad={bad}
          neutral={neutral}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
