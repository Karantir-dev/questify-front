import React from 'react';
import PropTypes from 'prop-types';
import s from './CompletedCard.module.css'

const CompletedCard = ({text}) => {
    return (
        <div className={s.cardBox}>
            <p className={s.content}>COMPLETED:<span className={s.link}>{text}</span></p>
            <svg width="144" height="124">
                <use href="../../images/completed-card-icons.svg#icon-award"></use>
            </svg>
            <button className={s.button}>Continue
                <svg width="7" height="5">
                    <use href="../../images/icons.svg#icon-arrow-right"></use>
                </svg>
            </button>
        </div>
    );
};

CompletedCard.propTypes = {
    text: PropTypes.string,
};

export default CompletedCard;