import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../../Components/CardList/CardList'

import s from '../../Pages/MainPage/MainPage.module.css'

const SectionMainPage = ({title, cardList}) => {
    return cardList.length > 0 && (
        <section className={s.section}>
            <h2 className={s.sectionTitle}>{title}</h2>
          <CardList cards={cardList} />
        </section>
    );
};

SectionMainPage.propTypes = {
    title: PropTypes.string,
    cardList: PropTypes.array,
};

export default SectionMainPage;