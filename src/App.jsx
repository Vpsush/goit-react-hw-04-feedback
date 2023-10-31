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

  const handleButtonClick = option => {
    setGood(prevState => ({
      [option]: prevState[option] + 1,
    }));

    return (
      <div className={css.container}>
        //{' '}
        <Section title="Please leave feedback">
          //{' '}
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            handleClick={handleButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              totalPercentage={totalPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  };
}
