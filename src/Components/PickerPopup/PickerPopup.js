import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import s from './PickerPopup.module.css'

import './../Modal/ModalAnimation.css'

PickerPopup.defaultProps = {
  type: 'category',
  isChallenge: false,
}

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

  const isDifficultyType = type === 'difficulty'
  const containerStyle =
    isChallenge && isDifficultyType
      ? [s[`${type}_container`], s.dark_container].join(' ')
      : s[`${type}_container`]

  const radioStyle =
    isChallenge && isDifficultyType
      ? s[`${type}_dark_radio`]
      : s[`${type}_radio`]

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
        <div className={containerStyle}>
          {options.map(option => (
            <label key={option} className={s[`${type}_label`]}>
              <input
                type="radio"
                checked={value === option}
                name={type}
                value={option}
                onChange={handleOptionsChange}
                className={radioStyle}
              />
              <span
                className={
                  isDifficultyType
                    ? [s[`${type}_text`], s[`${option}`]].join(' ')
                    : s[`${type}_text`]
                }
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </CSSTransition>
    </>
  )
}
