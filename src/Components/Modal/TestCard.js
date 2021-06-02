import React from 'react';
import s from './Modal.module.css';

export default function TestCard({children}) {
    return (
         <div className={s.card}>
            {children}
        </div>
     )
}