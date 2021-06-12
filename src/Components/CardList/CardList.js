import React from 'react'
import PropTypes from 'prop-types'
import StaticCard from '../StaticCard/StaticCard'

import './CardList.module.css'

function CardList({ cards }) {
  return (
    <ul>
      {/* <li key={id}>
        <CreateEditCard
          isChallenge={isChallenge}
          difficulty={difficulty}
          category={category}
          deadline={deadline}
          text={text}
          isCompleted={isCompleted}
        />
      </li> */}

      {cards.map(
        ({
          id,
          isChallenge,
          difficulty,
          category,
          deadline,
          text,
          isCompleted,
        }) => (
          <li key={id}>
            <StaticCard
              id={id}
              isChallenge={isChallenge}
              difficulty={difficulty}
              category={category}
              deadline={deadline}
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
      difficulty: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
}

export default CardList
