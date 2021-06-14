import { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './CreateEditCard.module.css'
import DeleteModal from '../DeleteModal/DeleteModal'
import CompletedCard from '../CompletedCard/CompletedCard'
import DateTimePicker from '../DateTimePicker/DateTimePicker'
import OptionsPicker from '../OptionsPicker/OptionsPicker'
import Icon from '../Icon'
import cardsOperations from '../../Redux/cards/cardsOperations'
import cardActions from '../../Redux/cards/cardsActions'

const TITLES = {
  EDIT_CHALLENGE: 'EDIT CHALLENGE',
  CREATE_CHALLENGE: 'CREATE NEW CHALLENGE',
  EDIT_QUEST: 'EDIT QUEST',
  CREATE_QUEST: 'CREATE NEW QUEST',
}

const CreateEditCard = ({
  isChallengeProp = false,
  isCompletedProp = false,
  textProp = '',
  difficultyProp = 'normal',
  categoryProp = 'family',
  deadlineProp = new Date(),
  cardId = null,
  handleHideCard,
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

  const handleDeleteCard = () => dispatch(cardsOperations.deleteCard(cardId))

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

  const onClickCreateCard = () =>
    dispatch(
      cardsOperations.addCard(
        text,
        deadline,
        difficulty,
        category,
        isChallenge,
        isCompleted,
      ),
    )

  const handleCreateCard = () => {
    if (text.trim() === '') {
      dispatch(cardActions.addCardError('Please, enter some text.'))
      return
    }

    onClickCreateCard()
    handleHideCard()
  }

  const onClickEditCard = () =>
    dispatch(
      cardsOperations.editCard(cardId, {
        text,
        isChallenge,
        isCompleted,
        category,
        difficulty,
        deadline,
      }),
    )

  const handleEditCard = () => {
    if (text.trim() === '') {
      dispatch(cardActions.addCardError('Please, enter some text.'))
      return
    }

    onClickEditCard()
    handleHideCard()
  }

  return (
    <>
      <div className={styles.cardBackdrop} onClick={handleHideCard}></div>
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
          <DeleteModal
            isChallenge={isChallenge}
            onClose={onCancelBtnClick}
            onDelete={textProp ? handleDeleteCard : handleHideCard}
          />
        )}
        <div className={styles.cardTopButtons}>
          <OptionsPicker
            type="difficulty"
            getOptionValue={setDifficulty}
            initialValue={difficulty}
            isChallenge={isChallenge}
          />
          <button type="button" onClick={handleCardTypeToggle}>
            {isChallenge ? (
              <Icon
                className={styles.trophyIcon}
                name="trophy"
                color="var(--primary-color)"
                size={15}
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
            autoComplete={false}
            type="text"
            name="quest"
            value={text}
            onChange={onInputChange}
          />
        </div>
        <div className={styles.datePicker}>
          <DateTimePicker deadline={deadline} handleDateChange={setDeadline} />
        </div>
        <div className={styles.cardBottomButtons}>
          <OptionsPicker
            type="category"
            getOptionValue={setCategory}
            initialValue={category}
            isChallenge={isChallenge}
          />
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
                      color="var(--accent-red)"
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
  handleHideCard: PropTypes.func.isRequired,
}

export default CreateEditCard
