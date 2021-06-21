import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import s from './DeleteModal.module.css'
import './DeleteModalAnimation.css'

export default function DeleteModal({ isChallenge, onClose, onDelete }) {
  const cardType = isChallenge ? 'Challenge' : 'Quest'

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  const handleCancelBtnClick = () => {
    onClose()
  }

  const handleDeleteBtnClick = () => {
    onDelete()
    onClose()
  }

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={250}
        classNames="content"
        unmountOnExit
      >
        <div className={s.content}>
          <p className={s.confirm}>Delete this {cardType}?</p>
          <div className={s.buttonWrapper}>
            <button
              className={s.button}
              onClick={handleCancelBtnClick}
              type="button"
            >
              cancel
            </button>
            <button
              className={s.button}
              onClick={handleDeleteBtnClick}
              type="button"
            >
              delete
            </button>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

DeleteModal.propTypes = {
  isChallenge: PropTypes.bool,
  onDelete: PropTypes.func,
  onClose: PropTypes.func,
}
