import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import cardsOperations from '../../Redux/cards/cardsOperations'

import CompletedCard from '../../Components/CompletedCard/CompletedCard'

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

  const [showCompleted, setShowCompleted] = useState(false)
  const toggleCompleted = useCallback(() => {
    setShowCompleted(prevShowCompleted => !prevShowCompleted)
  }, [])

  const dispatch = useDispatch()
  const onDeleteCard = useCallback(
    id => {
      dispatch(cardsOperations.deleteCard(id))
    },
    [dispatch],
  )

  const onCompletedCard = () => {}

  return (
    <div className={s.card}>
      {/* Это для понимания от куда приходят id и isChallenge */}
      {/* {cards.map(({ id, isChallenge }) => ( */}
      {/* Тут будет разметка карточки */}
      <div>
        {/* Это тестовая кнопка для открытия модалки  */}
        <button type="button" onClick={toggleModal}>
          show modal
        </button>
        {/* Это тестовая кнопка для открытия completed card  */}
        <button type="button" onClick={toggleCompleted}>
          show completed
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

        <CSSTransition
          in={showCompleted}
          unmountOnExit
          classNames="modal"
          timeout={250}
        >
          <CompletedCard
            text={text}
            isChallenge={isChallenge}
            onCompleted={() => onCompletedCard(id)}
            onClose={toggleCompleted}
          />
        </CSSTransition>
      </div>
      {/* ))} */}
    </div>
  )
}
