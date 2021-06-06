import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../../images/completed-card-icons.svg'
import Icon from '../Icon'

import s from './CompletedCard.module.css'

const CompletedCard = ({text}) => {
    return (
        <div className={s.challenge}>
            <div className={s.contentBox}>
                <p className={s.content}>COMPLETED:</p>
                <a href="./" className={s.link}><span className={s.linkText}>Visit the dentist today</span></a>
            </div>
            
            <svg className={s.image}>
                <use xlinkHref={`${Icons}#icon-award`} />
            </svg>
            <button className={s.button}>
                <span>Continue</span>
                <Icon className={s.arrow} name={'arrow-right'} size={7} />
            </button>
        </div>
    );
};

CompletedCard.propTypes = {
    text: PropTypes.string,
};

export default CompletedCard;