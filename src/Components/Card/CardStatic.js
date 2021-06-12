import PropTypes from 'prop-types'
import styles from './StaticCard.module.css'
import Icon from '../Icon'
import CreateEditCard from '../../Components/CreateEditCard/CreateEditCard'

function CardStatic({
  id,
  isChallenge,
  difficulty,
  category,
  date,
  text,
  isCompleted,
}) {
  return (
    <button
      type="button"
      className={isChallenge ? styles.ContainerChallenge : styles.baseContainer}
      // onClick={test}
    >
      <div className={styles.difficultyContainer}>
        <div className={styles.difficultyLevel}>
          <div className={styles[difficulty]}></div>
          <h3 className={styles.difficulty}>{difficulty}</h3>
        </div>

        {isChallenge ? (
          <Icon className={styles.IconTrophy} name="trophy" />
        ) : (
          <Icon className={styles.IconStar} name="Star" />
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
        <div className={styles[category]}>{category}</div>
      </div>
    </button>
  )
}

CardStatic.propTypes = {
  isChallenge: PropTypes.bool,
  difficulty: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  handleEditCard: PropTypes.func,
}

export default CardStatic
