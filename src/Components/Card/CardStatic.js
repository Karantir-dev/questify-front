import React from 'react'
import PropTypes from 'prop-types'
import styles from './CardStatic.module.css'
import Icon from '../Icon'

CardStatic.propTypes = {}

function CardStatic({
  id,
  isChallenge,
  difficulty,
  categorie,
  date,
  text,
  isCompleted,
}) {
  function onClearBtn() {
    // console.log('test CLEAR BUTTON')
  }

  function onCreateBtn() {
    // console.log('test CREATE BUTTON')
  }

  function findCategorie() {
    const str1 = 'styles.'
    const str2 = str1 + 'stuff'
    console.log(str2)
    return styles.stuff
  }
  findCategorie()
  return (
    <div
      className={isChallenge ? styles.ContainerChallenge : styles.baseContainer}
    >
      <div className={styles.difficaltyContainer}>
        <div className={styles.difficultyLevel}>
          {difficulty.toLowerCase() == 'easy' && (
            <div className={styles.difficaltyEasy}></div>
          )}

          {difficulty.toLowerCase() == 'normal' && (
            <div className={styles.difficaltyNormal}></div>
          )}
          {difficulty.toLowerCase() == 'hard' && (
            <div className={styles.difficaltyHard}></div>
          )}

          <h2 className={styles.difficalty}>{difficulty}</h2>
        </div>
        {isChallenge ? (
          <Icon className={styles.IconTrophy} name="trophy" />
        ) : (
          <Icon className={styles.IconStar} name="Star" />
        )}
      </div>

      {isChallenge && <h2 className={styles.cardType}>Challenge</h2>}
      <h1
        className={isChallenge ? styles.taskNameChallenge : styles.taskNameBase}
      >
        {text}
      </h1>
      <h2 className={styles.dateStyle}>
        {isChallenge ? `by ${date}` : `${date}`}
      </h2>

      <div>
        <div
          className={
            (categorie.toLowerCase() == 'stuff' && styles.categstuff) ||
            (categorie.toLowerCase() == 'family' && styles.categfamily) ||
            (categorie.toLowerCase() == 'health' && styles.categhealth) ||
            (categorie.toLowerCase() == 'learning' && styles.categlearning) ||
            (categorie.toLowerCase() == 'leisure' && styles.categleisure) ||
            (categorie.toLowerCase() == 'work' && styles.categwork)
          }
        >
          {categorie}
        </div>
      </div>
    </div>
  )
}

export default CardStatic
