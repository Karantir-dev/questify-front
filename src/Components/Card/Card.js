import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import Icon from '../Icon'
import EditCard from '../CreateEditCard/CreateEditCard'
import s from './Card.module.css'
import './Animation.css'

const Card = ({ text, difficulty, isChallenge, category, deadline }) => {
  const iconName = isChallenge ? 'trophy' : 'Star'
  const classList = isChallenge ? s.challengeCard : s.questCard
  const diffName = difficulty.slice(0, 1).toUpperCase() + difficulty.slice(1)
  const classCircle = [s.circle, s[`${difficulty}`]].join(' ')

  const optionsTime = { hour12: false, hour: 'numeric', minute: 'numeric' }
  const date = new Date(deadline).toLocaleTimeString('en-US', optionsTime)
  let time;

  if (new Date().toLocaleDateString() === new Date(deadline).toLocaleDateString()) {
    time = `Today, ${date}`
  } else if (new Date().getDate()+1 === new Date(deadline).getDate()) {
    time = `Tomorrow, ${date}`
  } else if (new Date().getDate() + 7 > new Date(deadline).getDate() &&
    new Date().getMonth() === new Date(deadline).getMonth()
  ) {
    const options = { weekday: 'long' }
    time = `${new Date(deadline).toLocaleDateString('en-US', options)}, ${date}`
  } else if (new Date().getDate() + 14 < new Date(deadline).getDate() ||
    new Date().toLocaleDateString() < new Date(deadline).toLocaleDateString()
  ) {
    const options = { month: 'long', day: 'numeric' }
    time = `${new Date(deadline).toLocaleDateString('en-US', options)}, ${date}`
  } 

  const [showEditCard, setShowEditCard] = useState(false)
  const handleCardClick = () => {
    setShowEditCard(true)
  }

  return (
    <div className={classList} onClick={handleCardClick}>
      <div className={s.cardHeader}>
        <p className={s.difficulty}><span className={classCircle}></span>{diffName}</p>
        <Icon className={s.Icon} name={iconName} size={19} />
      </div>
      <div className={s.centerBox}>
        {isChallenge && <p className={s.challengeTitle}>CHALLENGE</p>}
        <h2 className={s.title}>{text}</h2>
        <p className={s.date}>{isChallenge && <span>by </span>}
          {time}</p>
      </div>
      <div className={s.categoryBox} style={{ backgroundColor: `var(--${category}-color)` }}>
        <span className={s.categoryName}>{category}</span>
      </div>

      <CSSTransition
        in={showEditCard}
        unmountOnExit
        classNames="editCard"
        timeout={500}
      >
        <EditCard/>
      </CSSTransition>
    </div>
);
};

Card.propTypes = {
  text: PropTypes.string,
  difficulty: PropTypes.string,
  isChallenge: PropTypes.bool,
  category: PropTypes.string,
  deadline: PropTypes.string,
};

export default Card;