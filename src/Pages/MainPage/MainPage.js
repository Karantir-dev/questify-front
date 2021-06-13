import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CardList from '../../Components/CardList/CardList'
import Header from '../../Components/Header/Header'
import Icon from '../../Components/Icon'
import IconButton from '../../Components/IconButton/IconButton'
import CreateEditCard from '../../Components/CreateEditCard/CreateEditCard'

import StaticCard from '../../Components/StaticCard/StaticCard'

import cardsOperations from '../../Redux/cards/cardsOperations'
import cardsSelectors from '../../Redux/cards/cardsSelectors'

import s from './MainPage.module.css'

export default function Main() {
  const [showEditForm, setShowEditForm] = useState(false)

  const [doneIsShown, setDoneIsShown] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cardsOperations.fetchActiveCards())
  }, [dispatch])

  const activeTodayCards = useSelector(cardsSelectors.getActiveTodayCards)
  const activeTomorrowCards = useSelector(cardsSelectors.getActiveTomorrowCards)
  const doneCards = useSelector(cardsSelectors.getDoneCards)

  const activeThisWeekCards = useSelector(cardsSelectors.getActiveThisWeekCards)
  const activeThisMonthCards = useSelector(
    cardsSelectors.getActiveThisMonthCards,
  )
  const activeNextMonthsCards = useSelector(
    cardsSelectors.getActiveNextMonthsCards,
  )

  function onShowDone() {
    setDoneIsShown(!doneIsShown)

    if (!(doneCards.length >= 1)) {
      dispatch(cardsOperations.fetchDoneCards())
    }
  }

  return (
    <>
      <Header />
      <div className={s.container}>
        <section className={s.section}>
          <h2 className={s.sectionTitle}>TODAY</h2>
          {showEditForm && <CreateEditCard />}
          <CardList cards={activeTodayCards} />
          <StaticCard
            difficulty="hard"
            isChallenge="sds"
            text="Run the half-marathon Dubno"
            date="Tuesday, 00:00"
            category="leisure"
          />
        </section>

        <section className={s.section}>
          <h2 className={s.sectionTitle}>TOMORROW</h2>
          <CardList cards={activeTomorrowCards} />
        </section>

        <section className={s.section}>
          <h2 className={s.sectionTitle}>THIS WEEK</h2>
          <CardList cards={activeThisWeekCards} />
        </section>

        <section className={s.section}>
          <h2 className={s.sectionTitle}>THIS MONTH</h2>
          <CardList cards={activeThisMonthCards} />
        </section>

        <section className={s.section}>
          <h2 className={s.sectionTitle}>NEXT MONTHS</h2>
          <CardList cards={activeNextMonthsCards} />
        </section>

        <section className={s.sectionDone}>
          <div className={s.lineWrapper}>
            <button className={s.btnDone} onClick={onShowDone}>
              DONE
              <Icon
                className={s.IconDone}
                name={doneIsShown ? 'triangle-up' : 'triangle-down'}
                size={12}
              />
            </button>
          </div>

          {doneIsShown && <CardList cards={doneCards} />}
        </section>

        <div className={s.buttonAddContainer}>
          <IconButton
            className={s.buttonAddCard}
            onClick={() => setShowEditForm(true)}
            aria-label="Add"
          >
            <Icon className={s.Icon} name={'plus'} size={15} />
          </IconButton>
        </div>
      </div>
    </>
  )
}
