import { useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import CardInfo from '../../Components/CardInfo/CardInfo'
import CreateEditCard from '../CreateEditCard/CreateEditCard'

import './Pagination.css'
import s from './CardList.module.css'
import ReactPaginate from 'react-paginate'

function CardList({ isCreateFormShown = false, onCloseForm = null, cards }) {
  const [offset, setOffset] = useState(0)

  const perPage = 5
  const pageCount = Math.ceil(cards.length / perPage)
  const slicedCards = cards.slice(offset, offset + perPage)

  const handlePageClick = e => {
    const selectedPage = e.selected
    setOffset(Math.ceil(selectedPage * perPage))
  }

  return (
    <>
      <ul className={s.cardList}>
        {isCreateFormShown && (
          <li className={s.cardList_item}>
            <CreateEditCard handleHideCard={onCloseForm} />
          </li>
        )}

        {/* {
        <CardInfo title="To add a new card, click the button in the lower right corner" />
      } */}

        {slicedCards.map(
          ({
            id,
            isChallenge,
            difficulty,
            category,
            deadline,
            text,
            isCompleted,
          }) => (
            <li key={id} className={s.cardList_item}>
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
      {cards.length > perPage && (
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      )}
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
