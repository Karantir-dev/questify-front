import PropTypes from 'prop-types'
import Card from '../Card/Card'
import InfoCard from '../InfoCard/InfoCard'
import CreateEditCard from '../CreateEditCard/CreateEditCard'

import s from './CardList.module.css'

function CardList({
  isCreateFormShown = false,
  onCloseForm = null,
  cards,
  isInfoCardShown = false,
}) {
  return (
    <ul className={s.cardList}>
      {isCreateFormShown && (
        <li className={s.cardListItem}>
          <CreateEditCard handleHideCard={onCloseForm} />
        </li>
      )}

      {isInfoCardShown && (
        <InfoCard title="To add a new card, click the button in the lower right corner" />
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
          <li className={s.cardListItem} key={id}>
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
