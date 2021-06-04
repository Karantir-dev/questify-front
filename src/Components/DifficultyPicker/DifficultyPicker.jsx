import { useState } from 'react';
import styles from './DifficultyPicker.module.css';
import Icon from '../Icon';

const Difficulty = {
  NORMAL: 'normal',
  HARD: 'hard',
  EASY: 'easy',
};

export default function DifficultyPicker({ editMode = false }) {
  const [difficulty, setDifficulty] = useState('normal');
  const [showDifficultyPicker, setShowDifficultyPicker] = useState(false);

  function handleDifficultyChange(e) {
    setDifficulty(e.target.value);
    setShowDifficultyPicker(!showDifficultyPicker);
  }

  const btnClasses = [styles.btnLabel];
  // eslint-disable-next-line default-case
  switch (difficulty) {
    case 'easy':
      btnClasses.push(styles.easy);
      break;
    case 'normal':
      btnClasses.push(styles.normal);
      break;
    case 'hard':
      btnClasses.push(styles.hard);
      break;
  }
  // if (difficulty === 'easy') {
  //   btnClasses.push(styles.easy);
  // }
  // if (difficulty === 'normal') {
  //   btnClasses.push(styles.normal);
  // }
  // if (difficulty === 'hard') {
  //   btnClasses.push(styles.hard);
  // }

  return (
    <>
      <button
        type="button"
        disabled={editMode ? null : 'disabled'}
        className={styles.btn}
        onClick={() => {
          setShowDifficultyPicker(!showDifficultyPicker);
        }}
      >
        <span className={btnClasses.join(' ')}>{difficulty}</span>
        {editMode && <Icon name="triangle-down" size={12} />}
      </button>
      {showDifficultyPicker && (
        <div className={styles.checkboxList}>
          <label className={styles.label}>
            <input
              type="radio"
              checked={difficulty === Difficulty.EASY}
              name="difficulty"
              value={Difficulty.EASY}
              onChange={handleDifficultyChange}
              className={styles.radio}
            />
            <span className={styles.easy}>EASY</span>
          </label>
          <label className={styles.label}>
            <input
              type="radio"
              checked={difficulty === Difficulty.NORMAL}
              name="difficulty"
              value={Difficulty.NORMAL}
              onChange={handleDifficultyChange}
              className={styles.radio}
            />
            <span className={styles.normal}>NORMAL</span>
          </label>
          <label className={styles.label}>
            <input
              type="radio"
              checked={difficulty === Difficulty.HARD}
              name="difficulty"
              value={Difficulty.HARD}
              onChange={handleDifficultyChange}
              className={styles.radio}
            />
            <span className={styles.hard}>HARD</span>
          </label>
        </div>
      )}
    </>
  );
}
