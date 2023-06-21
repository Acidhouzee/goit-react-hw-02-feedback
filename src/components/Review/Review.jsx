import React, { Component } from "react";
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import 'components/Review/Review.css'


export class Review extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const feedback = this.countPositiveFeedbackPercentage();
    const showFeedback = total > 0;

    return (
      <div className="review">
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={['good', 'neutral', 'bad']} 
            onLeaveFeedback={this.handleFeedback}>
          </FeedbackOptions>
        </Section>
        
        { !showFeedback ? ( <Notification message="There is no feedback"></Notification> )
        : (
          <Section title="Statistics">
            <Statistics 
              good={this.state.good} 
              neutral={this.state.neutral} 
              bad={this.state.bad} total={total} 
              feedback={feedback}>
            </Statistics>
          </Section>
        )}
      </div>
    );
  }
}