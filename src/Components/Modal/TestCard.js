import React, { useState, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './Modal.module.css';
import './ModalAnimation.css'

import Modal from './Modal';

export default function TestCard() {
    // Это нужно добавить в компонент Карточка
    const [showModal, setShowModal] = useState(false);
    const toggleModal = useCallback(() => {
        setShowModal(prevShowModal => !prevShowModal);
    }, []);
    
    return (
        <div className={s.card}>

            {/* Это нужно добавить в компонент Карточка */}
            <CSSTransition
                in={showModal}
                unmountOnExit
                classNames="modal"
                timeout={250}
            >
                <Modal isChallenge={false} onClose={toggleModal} />
                {/* Вместо false/true должен приходить проп isChallenge */}
            </CSSTransition>
            
            {/* Это тестовая кнопка для открытия модалки */}
            <button type="button" onClick={toggleModal}>show modal</button>
        </div>
     )
}