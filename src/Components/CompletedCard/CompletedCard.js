import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group'
import Icons from '../../images/completed-card-icons.svg'
import Icon from '../Icon'

import s from './CompletedCard.module.css'
import './CompletedAnimation.css'

const CompletedCard = ({ text, isChallenge, onCompleted, onClose }) => {
  const classList = isChallenge ? s.challengeBox : s.questBox
  const classHiddenTrophy = isChallenge ? '' : s.hidden
  const classHiddenTarget = isChallenge ? s.hidden : ''
    
  const handleClick = () => {
    onClose()
    onCompleted()
  }
    
  return (
    <div className={classList}>
      <div className={s.contentBox}>
        <p className={s.content}>COMPLETED:</p>
        <p onClick={onClose} className={s.link}><span className={s.linkText}>{text}</span></p>
      </div>
      <div className={s.awardBox}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1250}
          classNames="leftClouds"
          unmountOnExit
        >
          <svg className={s.leftClouds}>
            <use xlinkHref={`${Icons}#icon-left-clouds`} />
          </svg>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1250}
          classNames="rightClouds"
          unmountOnExit
        >
          <svg className={s.rightClouds}>
            <use xlinkHref={`${Icons}#icon-right-clouds`} />
          </svg>
        </CSSTransition>
        <svg className={s.iconBase}>
          <use xlinkHref={`${Icons}#icon-base`} />
        </svg>
        <div className={classHiddenTrophy}>
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="trophy"
            unmountOnExit
          >
            <svg className={s.iconTrophy}>
              <use xlinkHref={`${Icons}#icon-trophy`} />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={true}
            appear={true}
            timeout={1500}
            classNames="first"
            unmountOnExit
          >
            <svg className={s.iconFirst}>
              <use xlinkHref={`${Icons}#icon-first`} />
            </svg>
          </CSSTransition>
        </div>
        <div className={classHiddenTarget}>
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="target"
            unmountOnExit
          >
            <svg className={s.iconTarget}>
              <use xlinkHref={`${Icons}#icon-target`} />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={true}
            appear={true}
            timeout={2000}
            classNames="arrow"
            unmountOnExit
          >
            <svg className={s.iconArrow}>
              <use xlinkHref={`${Icons}#icon-arrow`} />
            </svg>
          </CSSTransition>
        </div>        
      </div>    
      <button onClick={handleClick} className={s.button}>
        <span>Continue</span>
        <Icon className={s.arrow} name={'arrow-right'} size={7} />
      </button>
    </div>
  );
};

CompletedCard.propTypes = {
  text: PropTypes.string,
  isChallenge: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default CompletedCard;