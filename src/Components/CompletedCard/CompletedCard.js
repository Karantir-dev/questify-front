import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group'
import Icons from '../../images/completed-card-icons.svg'
import Icon from '../Icon'

import s from './CompletedCard.module.css'
import './CompletedAnimation.css'

const CompletedCard = ({ text, isChallenge, onCompleted, onClose }) => {
  const classList = isChallenge ? s.questBox : s.challengeBox
  const name = isChallenge ? 'award' : 'awardTrophy'
    
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

      {/* <CSSTransition
        in={true}
        appear={true}
        timeout={250}
        classNames="award"
        unmountOnExit
      >
        <svg className={s.image}>
          <use xlinkHref={`${Icons}#icon-${name}`} />
        </svg>
      </CSSTransition> */}
      <div className={s.awardBox}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1250}
          classNames="leftClouds"
          unmountOnExit
        >
          <div>
            <svg className={s.iconCloud1}>
              <use xlinkHref={`${Icons}#icon-cloud`} />
            </svg>
            <svg className={s.iconCloud2}>
              <use xlinkHref={`${Icons}#icon-cloud`} />
            </svg>
            <svg className={s.iconCloud3}>
              <use xlinkHref={`${Icons}#icon-cloud`} />
            </svg>
            <svg className={s.iconCloud4}>
              <use xlinkHref={`${Icons}#icon-cloud`} />
            </svg>
            <svg className={s.iconCloud8}>
              <use xlinkHref={`${Icons}#icon-cloud`} />
            </svg>
          </div>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1250}
          classNames="rightClouds"
          unmountOnExit
        >
          <div>
            <svg className={s.iconCloud5}>
              <use xlinkHref={`${Icons}#icon-cloud`} />
            </svg>
            <svg className={s.iconCloud6}>
              <use xlinkHref={`${Icons}#icon-cloud`} />
            </svg>
            <svg className={s.iconCloud7}>
              <use xlinkHref={`${Icons}#icon-cloud`} />
            </svg>
            <svg className={s.iconCloud9}>
              <use xlinkHref={`${Icons}#icon-cloud`} />
            </svg>
          </div>
        </CSSTransition>
        <svg className={s.iconBase}>
          <use xlinkHref={`${Icons}#icon-base`} />
        </svg>
        <CSSTransition
          in={true}
          appear={true}
          timeout={750}
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