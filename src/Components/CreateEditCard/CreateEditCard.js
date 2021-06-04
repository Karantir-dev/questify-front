import { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './CreateEditCard.module.css'
import Modal from '../Modal/Modal'
import cardsOperations from '../../Redux/cards/cardsOperations'

const CreateEditCard = ({
  isChallenge = false,
  isCompleted = false,
  text = '',
  difficulty = 'Normal',
  category = 'FAMILY',
  deadline = Date.now(),
  cardId,
}) => {
  const dispatch = useDispatch()
  const [isDeleting, setIsDeleting] = useState(false)
  const [inputValue, setInputValue] = useState(text)

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
    setInputValue(e.target.value)
  }

  return (
    <>
      {text && (
        <div className="creation-card">
          {isDeleting && (
            <Modal
              isChallenge={isChallenge}
              onClose={onCancelBtnClick}
              onDelete={handleDeleteCard}
            />
          )}
          <h3>CREATE NEW QUEST</h3>
          <div className="input-wrapper">
            <input
              className="card-input"
              type="text"
              name="quest"
              value={inputValue}
              onChange={onInputChange}
            />
          </div>
          <button type="button" onClick={onDeleteBtnClick}>
            Delete
          </button>
        </div>
      )}

      {!text && (
        <div className={styles.card}>
          {isDeleting && (
            <Modal
              isChallenge={isChallenge}
              onClose={onCancelBtnClick}
              onDelete={handleDeleteCard}
            />
          )}
          <h3>EDIT QUEST</h3>
          <div className="input-wrapper">
            <input
              className="card-input"
              type="text"
              name="quest"
              value={inputValue}
              onChange={onInputChange}
            />
          </div>
          <button type="button" onClick={onDeleteBtnClick}>
            Delete
          </button>
        </div>
      )}
    </>
  )
}

export default CreateEditCard
