import React, { useState, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'
import s from './Modal.module.css'
import './ModalAnimation.css'

import Modal from './Modal'
import OptionsPicker from '../OptionsPicker/OptionsPicker'

export default function TestCard() {
  // Это нужно добавить в компонент Карточка
  const [difficulty, setDifficulty] = useState(null)
  const [category, setCategory] = useState(null)

  const [showModal, setShowModal] = useState(false)
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal)
  }, [])

  function getOption(e) {
    switch (e.target.name) {
      case 'category':
        setCategory(e.target.value)
        break
      case 'difficulty':
        setDifficulty(e.target.value)
        break
    }
  }

  return (
    <div className={s.card}>
      {/* Это нужно добавить в компонент Карточка */}
      <CSSTransition
        in={showModal}
        unmountOnExit
        classNames="modal"
        timeout={250}
      >
        <Modal isChallenge={false} onClose={toggleModal} />
        {/* Вместо false/true должен приходить проп isChallenge */}
      </CSSTransition>

      {/* Это тестовая кнопка для открытия модалки */}
      <OptionsPicker
        type="category"
        initialValue="family"
        getOptionValue={getOption}
      />
      <OptionsPicker
        type="difficulty"
        initialValue="normal"
        isChallenge={false}
        getOptionValue={getOption}
      />
      <button type="button" onClick={toggleModal}>
        show modal
      </button>
    </div>
  )
}
