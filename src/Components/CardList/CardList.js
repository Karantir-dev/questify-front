import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import './CardList.module.css'

function CardList({ cards }) {
  return (
    <ul>
      {cards.map(
        ({
          id,
          isChallenge,
          difficulty,
          categorie,
          date,
          text,
          isCompleted,
        }) => (
          <li key={id}>
          <Card
            isChallenge={isChallenge}
            difficulty={difficulty}
            categorie={categorie}
            date={date}
            text={text}
            isCompleted={isCompleted}
            />
          </li>
        ),
      )}
    </ul>
  )
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isChallenge: PropTypes.bool.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      difficulty: PropTypes.string.isRequired,
      categorie: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
}

export default CardList
