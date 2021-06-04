import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import cardsOperations from '../../Redux/cards/cardsOperations'

import s from './Modal.module.css'
import './ModalAnimation.css'

import Modal from './Modal'

export default function TestCard({
  id,
  isChallenge,
  difficulty,
  categorie,
  date,
  text,
  isCompleted,
}) {
  // Это нужно добавить в компонент Карточка
  const [showModal, setShowModal] = useState(false)
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal)
  }, [])

  const dispatch = useDispatch()
  const onDeleteCard = useCallback(
    id => {
      dispatch(cardsOperations.deleteCard(id))
    },
    [dispatch],
  )

  return (
    <div className={s.card}>
      {/* Это для понимания от куда приходят id и isChallenge */}
      {/* {cards.map(({ id, isChallenge }) => ( */}
      // Тут будет разметка карточки
      <div>
        {/* Это тестовая кнопка для открытия модалки  */}
        <button type="button" onClick={toggleModal}>
          show modal
        </button>

        <CSSTransition
          in={showModal}
          unmountOnExit
          classNames="modal"
          timeout={250}
        >
          <Modal
            isChallenge={isChallenge}
            onClose={toggleModal}
            onDelete={() => onDeleteCard(id)}
          />
        </CSSTransition>
      </div>
      {/* ))} */}
    </div>
  )
}
