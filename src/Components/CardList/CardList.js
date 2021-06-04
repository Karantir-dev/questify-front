import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardList.module.css';

function CardList({cards}) {
    return (
      <ul>
        {cards.map(({ type, difficulty, categorie, date, text }) => (
            <Card
            type={type}
            difficulty={difficulty}
            categorie={categorie}
            date={date}
            text={text}
            /> 
        ))}
      </ul>
    );
  };

CardList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        difficulty: PropTypes.string.isRequired,
        categorie: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ),

  };
  
  export default CardList;
