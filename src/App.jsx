import React, { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import css from 'index.module.css';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleButtonClick = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//       // feedbackGiven: true,
//     }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((total, curr) => (total += curr));
//   };

//   countPositiveFeedbackPercentage = totalFeedback => {
//     const { good } = this.state;

//     if (totalFeedback > 0) return Math.round((good / totalFeedback) * 100);
//     return 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const totalPercentage = this.countPositiveFeedbackPercentage(totalFeedback);

//     return (
//       <div className={css.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             handleClick={this.handleButtonClick}
//           />
//         </Section>
//         <Section title="Statistics">
//           {totalFeedback ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               totalPercentage={totalPercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const handleButtonClickGood = () => {
  //   setGood(prevGood => prevGood + 1);
  // };

  // const handleButtonClickNeutral = () => {
  //   setNeutral(prevNeutral => prevNeutral + 1);
  // };

  // const handleButtonClickBad = () => {
  //   setBad(prevBad => prevBad + 1);
  // };

  const handleButtonClick = e => {
    // const { number } = e.target;

    switch (e) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  // const countTotalFeedback = () => {
  //   return Object.values(setGood + setBad + setNeutral).reduce(
  //     (total, curr) => (total += curr)
  //   );
  // };

  const totalSum = good + bad + neutral;

  const countPositiveFeedbackPercentage = Math.round((good / totalSum) * 100);

  // const totalFeedback = countTotalFeedback();
  // const totalPercentage = countPositiveFeedbackPercentage(totalFeedback);

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          handleClick={handleButtonClick}
        />
      </Section>
      <Section title="Statistics">
        {totalSum ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalSum}
            totalPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
