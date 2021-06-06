import { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './CreateEditCard.module.css'
import Modal from '../Modal/Modal'
import Icon from '../Icon'
import cardsOperations from '../../Redux/cards/cardsOperations'

const CreateEditCard = ({
  isChallengeProp = false,
  isCompletedProp = false,
  textProp = '',
  difficultyProp = 'Normal',
  categoryProp = 'FAMILY',
  deadlineProp = Date.now(),
  cardId = null,
  onDeleteNewCard = null,
}) => {
  const dispatch = useDispatch()
  const [isDeleting, setIsDeleting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(isCompletedProp)
  const [text, setText] = useState(textProp)
  const [isChallenge, setIsChallenge] = useState(isChallengeProp)
  const [category, setCategory] = useState(categoryProp)
  const [difficulty, setDifficulty] = useState(difficultyProp)
  const [deadline, setDeadline] = useState(deadlineProp)

  const onDeleteBtnClick = () => {
    setIsDeleting(true)
  }

  const onCancelBtnClick = () => {
    setIsDeleting(false)
  }

  const handleDeleteCard = useCallback(
    () => dispatch(cardsOperations.deleteCard(cardId)),
    [dispatch, cardId],
  )

  const onInputChange = e => {
    setText(e.target.value)
  }

  const handleCardTypeToggle = () => {
    setIsChallenge(prevState => !prevState)
  }

  const handleCardCompletedStatus = () => {
    setIsCompleted(true)
  }

  const handleCreateCard = useCallback(
    () =>
      dispatch(
        cardsOperations.addCard(
          text,
          isChallenge,
          category,
          difficulty,
          deadline,
        ),
      ),
    [dispatch, text, isChallenge, category, difficulty, deadline],
  )

  const handleEditCard = useCallback(
    () =>
      dispatch(
        cardsOperations.editCard(cardId, {
          text,
          isChallenge,
          category,
          difficulty,
          deadline,
        }),
      ),
    [dispatch, cardId, { text, isChallenge, category, difficulty, deadline }],
  )

  return (
    <>
      <div className={styles.card}>
        {isCompleted && 'congratulations'}
        {isDeleting && (
          <Modal
            isChallenge={isChallenge}
            onClose={onCancelBtnClick}
            onDelete={onDeleteNewCard ? onDeleteNewCard : handleDeleteCard}
          />
        )}
        <button type="button" onClick={handleCardTypeToggle}>
          {isChallenge ? (
            <Icon
              className={styles.starIcon}
              name="star"
              color="var(--primary-color)"
              size="15px"
            />
          ) : (
            <Icon
              className={styles.trophyIcon}
              name="trophy"
              color="var(--primary-color)"
              size="14px"
            />
          )}
        </button>
        <h3>{text ? 'EDIT QUEST' : 'CREATE NEW QUEST'}</h3>
        <div className={styles.cardInputWrapper}>
          <input
            className={styles.cardInput}
            type="text"
            name="quest"
            value={text}
            onChange={onInputChange}
          />
        </div>
        {textProp ? (
          <div className={styles.editButtonsWrapper}>
            <button type="button" onClick={handleEditCard}>
              <Icon
                className={styles.saveIcon}
                name="save"
                color="var(--primary-color)"
                size="10px"
              />
            </button>

            <button type="button" onClick={onDeleteBtnClick}>
              <Icon
                className={styles.clearIcon}
                name="clear"
                color="#DB0837"
                size="10px"
              />
            </button>
            <button type="button" onClick={handleCardCompletedStatus}>
              <Icon
                className={styles.doneIcon}
                name="done"
                color="var(--main-green)"
                size="14px"
              />
            </button>
          </div>
        ) : (
          <div className={styles.createButtonsWrapper}>
            <button type="button" onClick={onDeleteBtnClick}>
              <Icon
                className={styles.clearIcon}
                name="clear"
                color="#DB0837"
                size="10px"
              />
            </button>
            <button
              className={styles.createBtn}
              type="button"
              onClick={handleCreateCard}
            >
              <span>CREATE</span>
            </button>
          </div>
        )}
      </div>
    </>
  )
}

CreateEditCard.propTypes = {
  isChallengeProp: PropTypes.bool,
  isCompletedProp: PropTypes.bool,
  textProp: PropTypes.string,
  difficultyProp: PropTypes.string,
  categoryProp: PropTypes.string,
  deadlineProp: PropTypes.string,
  cardId: PropTypes.string,
  onDeleteNewCard: PropTypes.func,
}

export default CreateEditCard
