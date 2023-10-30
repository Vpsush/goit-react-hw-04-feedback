import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, totalPercentage }) => {
  return (
    <div className={css.stat}>
      <div>
        <span className={css.numbersName}>
          Good: <p className={css.numbers}>{good}</p>
        </span>
        <span className={css.numbersName}>
          Neutral: <p className={css.numbers}>{neutral}</p>
        </span>
        <span className={css.numbersName}>
          Bad: <p className={css.numbers}>{bad}</p>
        </span>
        <span className={css.numbersName}>
          Total:
          <p className={css.numbers}>{total}</p>
        </span>
        <span className={css.numbersName}>
          Positive Feedback:
          <p className={css.numbers}>{totalPercentage.toFixed(2)} %</p>
        </span>
      </div>
    </div>
  );
};

export default Statistics;
