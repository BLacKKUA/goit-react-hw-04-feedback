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

  addFeedback = e => {
    switch (e) {
      case 'good':
        this.setState(prevState => ({
          [e]: prevState.good + 1,
        }));
        break;
      case 'neutral':
        this.setState(prevState => ({
          [e]: prevState.neutral + 1,
        }));
        break;
      case 'bad':
        this.setState(prevState => ({
          [e]: prevState.bad + 1,
        }));
        break;
    }
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) =>
    Number(good) + Number(neutral) + Number(bad);
  countPositiveFeedbackPercentage = ({ good } = this.state) =>
    Math.round((good / this.countTotalFeedback()) * 100);

  render() {
    return (
      <>
        <Controls addFeedback={this.addFeedback} />
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
