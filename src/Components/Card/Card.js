import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import s from './Card.module.css'

const Card = ({ text, difficulty, isChallenge, category, deadline }) => {
    const iconName = isChallenge ? 'trophy' : 'Star'
    const classList = isChallenge ? s.challengeCard : s.questCard
    const diffName = difficulty.slice(0, 1).toUpperCase() + difficulty.slice(1)

    const options = { hour12: false, hour: 'numeric', minute: 'numeric' }
    const optionsMonth = { month: 'long' }
    const date = new Date(deadline).toLocaleTimeString('en-US', options)
    let time = `${new Date(deadline).toLocaleDateString('en-US',optionsMonth)}, ${date}`

    if (new Date().toLocaleDateString() === new Date(deadline).toLocaleDateString()) {
        time = `Today, ${date}`
    }

    if (new Date().getDate()+1 === new Date(deadline).getDate()) {
        time = `Tomorrow, ${date}`
    }

    const classCircle = [s.circle, s[`${difficulty}`]].join(' ')
   
    return (
        <div className={classList}>
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