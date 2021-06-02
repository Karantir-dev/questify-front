  
import React from 'react';
import s from './Modal.module.css';

export default function Modal({ cardType, onClose, onDelete }) {
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    const handleCancelBtnClick = () => {
        onClose();
    };

    const handleDeleteBtnClick = () => {}
    
    return (
         <div className={s.backdrop} onClick={handleBackdropClick}>
            <div className={s.content}>
                <p className={s.confirm}>Delete this {cardType}?</p>
                <div className={s.buttonWrapper}>
                    <button className={s.button} onClick={handleCancelBtnClick} type="button">cancel</button>
                    <button className={s.button} onClick={handleDeleteBtnClick} type="button">delete</button>
                </div>
            </div>
        </div>
     )
}