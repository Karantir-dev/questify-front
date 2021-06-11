import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import CustomRadioList from '../CustomRadioList/CustomRadioList'
import s from './PickerPopup.module.css'

import './../Modal/ModalAnimation.css'

PickerPopup.propTypes = {
  isChallenge: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleOptionsChange: PropTypes.func.isRequired,
}

export default function PickerPopup({
  isChallenge,
  onClose,
  type,
  options,
  value,
  handleOptionsChange,
}) {
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
        <CustomRadioList
          isChallenge={isChallenge}
          type={type}
          options={options}
          value={value}
          handleOptionsChange={handleOptionsChange}
        />
      </CSSTransition>
    </>
  )
}
