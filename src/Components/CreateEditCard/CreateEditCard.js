import { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './CreateEditCard.module.css'
import Modal from '../Modal/Modal'
import CompletedCard from '../CompletedCard/CompletedCard'
import DateTimePicker from '../DateTimePicker/DateTimePicker'
import OptionsPicker from '../OptionsPicker/OptionsPicker'
import Icon from '../Icon'
import cardsOperations from '../../Redux/cards/cardsOperations'

const TITLES = {
  EDIT_CHALLENGE: 'EDIT CHALLENGE',
  CREATE_CHALLENGE: 'CREATE NEW CHALLENGE',
  EDIT_QUEST: 'EDIT QUEST',
  CREATE_QUEST: 'CREATE NEW QUEST',
}

const CreateEditCard = ({
  isChallengeProp = false,
  isCompletedProp = false,
  textProp = 'sdsd',
  difficultyProp = 'normal',
  categoryProp = 'family',
  deadlineProp = new Date(),
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

  const onCompletingModalClosed = () => {
    setIsCompleted(false)
  }

  const handleCreateCard = useCallback(
    () =>
      dispatch(
        cardsOperations.addCard(
          text,
          isChallenge,
          isCompleted,
          category,
          difficulty,
          deadline,
        ),
      ),
    [dispatch, text, isChallenge, isCompleted, category, difficulty, deadline],
  )

  const handleEditCard = useCallback(
    () =>
      dispatch(
        cardsOperations.editCard(cardId, {
          text,
          isChallenge,
          isCompleted,
          category,
          difficulty,
          deadline,
        }),
      ),
    [
      dispatch,
      cardId,
      text,
      isChallenge,
      isCompleted,
      category,
      difficulty,
      deadline,
    ],
  )

  return (
    <>
      <div className={isChallenge ? styles.cardChallenge : styles.card}>
        {isCompleted && (
          <CompletedCard
            text={text}
            isChallenge={isChallenge}
            onCompleted={handleEditCard}
            onClose={onCompletingModalClosed}
          />
        )}
        {isDeleting && (
          <Modal
            isChallenge={isChallenge}
            onClose={onCancelBtnClick}
            onDelete={onDeleteNewCard ? onDeleteNewCard : handleDeleteCard}
          />
        )}
        <div className={styles.cardTopButtons}>
          <div className={styles.optionsPicker}>
            <OptionsPicker
              type={'difficulty'}
              getOptionValue={setDifficulty}
              initialValue={difficulty}
              isChallenge={isChallenge}
            />
          </div>
          <div className={styles.cardOperationsButtons}>
            <button type="button" onClick={handleCardTypeToggle}>
              {isChallenge ? (
                <Icon
                  className={styles.trophyIcon}
                  name="trophy"
                  color="var(--primary-color)"
                  size={14}
                />
              ) : (
                <Icon
                  className={styles.starIcon}
                  name="Star"
                  color="var(--primary-color)"
                  size={15}
                />
              )}
            </button>
          </div>
        </div>
        <h3 className={styles.cardTitle}>
          {isChallenge
            ? textProp
              ? TITLES.EDIT_CHALLENGE
              : TITLES.CREATE_CHALLENGE
            : textProp
            ? TITLES.EDIT_QUEST
            : TITLES.CREATE_QUEST}
        </h3>
        <div className={styles.cardInputWrapper}>
          <input
            className={
              isChallenge ? styles.cardInputChallenge : styles.cardInput
            }
            type="text"
            name="quest"
            value={text}
            onChange={onInputChange}
          />
        </div>
        <div className={styles.datePicker}>
          <DateTimePicker date={deadline} handleDateChange={setDeadline} />
        </div>
        <div className={styles.cardBottomButtons}>
          <div className={styles.optionsPicker}>
            <OptionsPicker
              type={'category'}
              getOptionValue={setCategory}
              initialValue={category}
              isChallenge={isChallenge}
            />
          </div>
          <div className={styles.cardOperationsButtons}>
            {textProp ? (
              <ul className={styles.buttonsList}>
                <li>
                  <button type="button" onClick={handleEditCard}>
                    <Icon
                      className={styles.saveIcon}
                      name="save"
                      color="var(--primary-color)"
                      size={10}
                    />
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onDeleteBtnClick}>
                    <Icon
                      className={styles.clearIcon}
                      name="clear"
                      color="#DB0837"
                      size={10}
                    />
                  </button>
                </li>
                <li>
                  <button type="button" onClick={handleCardCompletedStatus}>
                    <Icon
                      className={styles.doneIcon}
                      name="done"
                      color="var(--main-green)"
                      size={14}
                    />
                  </button>
                </li>
              </ul>
            ) : (
              <ul className={styles.buttonsList}>
                <li>
                  <button type="button" onClick={onDeleteBtnClick}>
                    <Icon
                      className={styles.clearIcon}
                      name="clear"
                      color="#DB0837"
                      size={10}
                    />
                  </button>
                </li>
                <li>
                  <button
                    className={styles.createBtn}
                    type="button"
                    onClick={handleCreateCard}
                  >
                    <span>CREATE</span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
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
