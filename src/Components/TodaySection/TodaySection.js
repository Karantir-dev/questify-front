import { useRef } from 'react'
import { useSelector } from 'react-redux'
import CardList from '../../Components/CardList/CardList'
import IconButton from '../../Components/IconButton/IconButton'
import Icon from '../../Components/Icon'
import cardsSelectors from '../../Redux/cards/cardsSelectors'

import { useState } from 'react'

import s from '../../Pages/MainPage/MainPage.module.css'

export default function TodaySection({ cards }) {
  const [createFormShown, setCreateFormShown] = useState(false)
  const editCardEl = useRef(null)

  const handleBtnClick = () => {
    window.scrollTo({
      top: editCardEl.current.offsetTop,
      behavior: 'smooth',
    })

    setCreateFormShown(true)
  }

  const allActiveCards = useSelector(cardsSelectors.getAllActiveCards)

  return (
    <>
      <section className={s.section}>
        <h2 ref={editCardEl} className={s.sectionTitle}>
          TODAY
        </h2>

        <CardList
          isCreateFormShown={createFormShown}
          onCloseForm={() => setCreateFormShown(false)}
          cards={cards}
          isInfoCardShown={allActiveCards.length < 1 && !createFormShown}
        />
      </section>

      <div className={s.buttonAddContainer}>
        <IconButton
          className={s.buttonAddCard}
          onClick={handleBtnClick}
          aria-label="Add"
        >
          <Icon className={s.Icon} name={'plus'} size={15} />
        </IconButton>
      </div>
    </>
  )
}
