  
import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './Modal.module.css';
import './ModalAnimation.css'


export default function Modal({ isChallenge, onClose }) {
    const cardType = isChallenge ? 'Challenge' : 'Quest';

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose]);

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    const handleCancelBtnClick = () => {
        onClose();
    };

    const handleDeleteBtnClick = () => {
        // Тут будет логика для удаления контакта
        onClose();
    }
    
    return (
        <div className={s.backdrop} onClick={handleBackdropClick}>
            <CSSTransition in={true} appear={true} timeout={250} classNames="content" unmountOnExit>
                <div className={s.content}>
                    <p className={s.confirm}>Delete this {cardType}?</p>
                    <div className={s.buttonWrapper}>
                        <button className={s.button} onClick={handleCancelBtnClick} type="button">cancel</button>
                        <button className={s.button} onClick={handleDeleteBtnClick} type="button">delete</button>
                    </div>
                </div>
            </CSSTransition>
        </div>
     )
}