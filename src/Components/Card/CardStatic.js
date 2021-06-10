import React from 'react'
import PropTypes from 'prop-types'
import styles from './CardStatic.module.css'
import Icon from '../Icon'

function CardStatic({
  id,
  isChallenge,
  difficulty,
  category,
  date,
  text,
  isCompleted,
  handleEditCard,
}) {
  const dif = difficulty.toLowerCase()
  const categ = category.toLowerCase()

  return (
    <div
      className={isChallenge ? styles.ContainerChallenge : styles.baseContainer}
      onClick={handleEditCard}
    >
      <div className={styles.difficaltyContainer}>
        <div className={styles.difficultyLevel}>
          {dif == 'easy' && <div className={styles.difficaltyEasy}></div>}

          {dif == 'normal' && <div className={styles.difficaltyNormal}></div>}
          {dif == 'hard' && <div className={styles.difficaltyHard}></div>}

          <h3 className={styles.difficalty}>{difficulty}</h3>
        </div>
        {isChallenge ? (
          <Icon className={styles.Icon} name="trophy" />
        ) : (
          <Icon className={styles.Icon} name="Star" />
        )}
      </div>

      {isChallenge && <h3 className={styles.cardType}>Challenge</h3>}
      <h2
        className={isChallenge ? styles.taskNameChallenge : styles.taskNameBase}
      >
        {text}
      </h2>
      <h3 className={styles.dateStyle}>
        {isChallenge ? `by ${date}` : `${date}`}
      </h3>

      <div>
        <div
          className={
            (categ == 'stuff' && styles.categstuff) ||
            (categ == 'family' && styles.categfamily) ||
            (categ == 'health' && styles.categhealth) ||
            (categ == 'learning' && styles.categlearning) ||
            (categ == 'leisure' && styles.categleisure) ||
            (categ == 'work' && styles.categwork)
          }
        >
          {category}
        </div>
      </div>
    </div>
  )
}

CardStatic.propTypes = {
  isChallenge: PropTypes.bool,
  difficulty: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  handleEditCard: PropTypes.func,
}

export default CardStatic
