import PropTypes from 'prop-types'
import Card from '../Card/Card'
import CardInfo from '../../Components/CardInfo/CardInfo'
import CreateEditCard from '../CreateEditCard/CreateEditCard'
import cardsSelectors from '../../Redux/cards/cardsSelectors'

import './CardList.module.css'

function CardList({ isCreateFormShown = false, onCloseForm = null, cards }) {
  
  return (
  <>
    {showCardInfo ?
    (<ul>
      {isCreateFormShown && (
        <li>
          <CreateEditCard handleHideCard={onCloseForm} />
        </li>
      )}

      {/* {
        <CardInfo title="To add a new card, click the button in the lower right corner" />
      } */}

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
    </ul>) : (<CardInfo title="To add a new card, click the button in the lower right corner" />)}
  </>
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
