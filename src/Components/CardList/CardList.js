import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import './CardList.module.css'

function CardList({ cards }) {
  return (
    <ul>
      {cards.map(({ id, type, difficulty, categorie, date, text }) => (
        <Card
          key={id}
          type={type}
          difficulty={difficulty}
          categorie={categorie}
          date={date}
          text={text}
        />
      ))}
    </ul>
  )
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      categorie: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
}

export default CardList
