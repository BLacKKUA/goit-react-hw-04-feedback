import React from 'react';
import Statistics from './Statistics/Statistics';
import Controls from './Control/Control';
import { Notification } from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) =>
    Number(good) + Number(neutral) + Number(bad);
  countPositiveFeedbackPercentage = ({ good } = this.state) =>
    Math.round((good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <>
        <Controls
          addFeedback={this.addFeedback}
          options={[
            { title: 'Good', lc: 'good', key: 'good' },
            {
              title: 'Neutral',
              uc: 'OK',
              lc: 'neutral',
              key: 'neutral',
            },
            { title: 'Bad', uc: 'BAD', lc: 'bad', key: 'bad' },
          ]}
        />
        {this.state.good > 0 || this.state.bad > 0 || this.state.neutral > 0 ? (
          <Statistics
            title={'Statistics'}
            state={this.state}
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </>
    );
  }
}
