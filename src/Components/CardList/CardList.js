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
          category,
          deadline,
          text
        }) => (
          <li key={id}>
          <Card
            isChallenge={isChallenge}
            difficulty={difficulty}
            category={category}
            deadline={deadline}
            text={text}
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
      difficulty: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
}

export default CardList
