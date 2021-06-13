// import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './StaticCard.module.css'
import Icon from '../Icon'

function StaticCard({
  id,
  isChallenge,
  difficulty,
  category,
  deadline,
  text,
  isCompleted,
}) {
  return (
    <div
      className={isChallenge ? styles.ContainerChallenge : styles.baseContainer}
    >
      <div className={styles.difficultyContainer}>
        <div className={styles.difficultyLevel}>
          <div className={styles[difficulty]}></div>
          <h3 className={styles.difficulty}>{difficulty}</h3>
        </div>

        {isChallenge ? (
          <Icon
            className={styles.IconTrophy}
            name="trophy"
            color="var(--primary-color)"
          />
        ) : (
          <Icon
            className={styles.IconStar}
            name="Star"
            color="var(--primary-color)"
          />
        )}
      </div>

      {isChallenge && <h3 className={styles.cardType}>Challenge</h3>}
      <h2
        className={isChallenge ? styles.taskNameChallenge : styles.taskNameBase}
      >
        {text}
      </h2>

      <h3 className={styles.dateStyle}>
        {isChallenge ? `by ${deadline}` : `${deadline}`}
      </h3>

      <div>
        <div className={styles[category]}>{category}</div>
      </div>
    </div>
  )
}

StaticCard.propTypes = {
  isChallenge: PropTypes.bool,
  difficulty: PropTypes.string,
  category: PropTypes.string,
  deadline: PropTypes.string,
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
}

export default StaticCard
