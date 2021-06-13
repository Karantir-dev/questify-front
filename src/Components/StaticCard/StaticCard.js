import PropTypes from 'prop-types'
import styles from './StaticCard.module.css'
import Icon from '../Icon'

function StaticCard({ isChallenge, difficulty, category, deadline, text }) {
  const optionsTime = { hour12: false, hour: 'numeric', minute: 'numeric' }
  const date = new Date(deadline).toLocaleTimeString('en-US', optionsTime)
  let time
  console.log(new Date().getTime())
  if (
    new Date().toLocaleDateString() === new Date(deadline).toLocaleDateString()
  ) {
    time = `Today, ${date}`
  } else if (new Date().getDate() + 1 === new Date(deadline).getDate()) {
    time = `Tomorrow, ${date}`
  } else if (
    new Date().getDate() + 7 > new Date(deadline).getDate() &&
    new Date().getMonth() === new Date(deadline).getMonth()
  ) {
    const options = { weekday: 'long' }
    time = `${new Date(deadline).toLocaleDateString('en-US', options)}, ${date}`
  } else if (
    new Date().getDate() + 14 < new Date(deadline).getDate() ||
    new Date().toLocaleDateString() < new Date(deadline).toLocaleDateString()
  ) {
    const options = { month: 'long', day: 'numeric' }
    time = `${new Date(deadline).toLocaleDateString('en-US', options)}, ${date}`
  }

  return (
    <div
      className={isChallenge ? styles.ContainerChallenge : styles.baseContainer}
    >
      <div className={styles.difficultyContainer}>
        <div className={styles.difficultyLevel}>
          <div className={styles[difficulty?.toLowerCase()]}></div>
          <h3 className={styles.difficulty}>{difficulty}</h3>
        </div>

        <Icon
          className={isChallenge ? styles.IconTrophy : styles.IconStar}
          name={isChallenge ? 'trophy' : 'star'}
          color="var(--primary-color)"
        />
      </div>

      {isChallenge && <h3 className={styles.cardType}>CHALLENGE</h3>}
      <h2
        className={isChallenge ? styles.taskNameChallenge : styles.taskNameBase}
      >
        {text}
      </h2>

      <p className={styles.dateStyle}>
        {isChallenge && 'by '}
        {time}
      </p>

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
