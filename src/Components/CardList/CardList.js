import PropTypes from 'prop-types'
import Card from '../Card/Card'
import CreateEditCard from '../CreateEditCard/CreateEditCard'

import './CardList.module.css'

function CardList({ isCreateFormShown = false, onCloseForm = null, cards }) {
  return (
    <ul>
      {isCreateFormShown && (
        <li>
          <CreateEditCard onCloseForm={onCloseForm} />
        </li>
      )}

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
            <Card
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
