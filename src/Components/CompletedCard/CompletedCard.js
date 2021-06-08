import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import Icons from '../../images/completed-card-icons.svg'
import Icon from '../Icon'

import s from './CompletedCard.module.css'
import './CompletedAnimation.css'

const CompletedCard = ({ text, isChallenge, onCompleted, onClose }) => {
  const classList = isChallenge ? s.challengeBox : s.questBox
  const name = isChallenge ? 'award' : 'awardTrophy'

  const handleClick = () => {
    onClose()
    onCompleted()
  }

  return (
    <div className={classList}>
      <div className={s.contentBox}>
        <p className={s.content}>COMPLETED:</p>
        <p onClick={onClose} className={s.link}>
          <span className={s.linkText}>{text}</span>
        </p>
      </div>

      <CSSTransition
        in={true}
        appear={true}
        timeout={250}
        classNames="award"
        unmountOnExit
      >
        <svg className={s.image}>
          <use xlinkHref={`${Icons}#icon-${name}`} />
        </svg>
      </CSSTransition>

      <button onClick={handleClick} className={s.button}>
        <span>Continue</span>
        <Icon className={s.arrow} name={'arrow-right'} size={7} />
      </button>
    </div>
  )
}

CompletedCard.propTypes = {
  text: PropTypes.string,
  isChallenge: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
}

export default CompletedCard
