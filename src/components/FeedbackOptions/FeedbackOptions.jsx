import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <div className={css.btn}>
      {options.map(option => (
        <li key={option} className={css.info}>
          <button
            name={option}
            onClick={() => handleClick(option)}
            type="button"
            className={css.btnName}
          >
            {option}
          </button>
        </li>
      ))}
    </div>
  );
};

export default FeedbackOptions;
