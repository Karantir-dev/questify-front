import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import s from './PickerPopup.module.css'

import '../DeleteModal/ModalAnimation.css'

PickerPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default function PickerPopup({ children, onClose }) {
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

  return (
    <>
      <div className={s.backdrop} onClick={handleBackdropClick}></div>
      <CSSTransition
        in={true}
        appear={true}
        timeout={250}
        classNames="content"
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </>
  )
}
