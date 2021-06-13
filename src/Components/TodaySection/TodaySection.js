import CardList from '../../Components/CardList/CardList'
import IconButton from '../../Components/IconButton/IconButton'
import Icon from '../../Components/Icon'

import { useState } from 'react'

import s from '../../Pages/MainPage/MainPage.module.css'
// import StaticCard from '../StaticCard/StaticCard'

export default function TodaySection({ cards }) {
  const [createFormShown, setCreateFormShown] = useState(false)

  const handleBtnClick = () => {
    const todayTitle = document.querySelector('#today')
    const toUp = todayTitle.clientHeight

    window.scrollTo({
        top: toUp,
        behavior: 'smooth',
    });
    
    setCreateFormShown(true)
  }

  return (
    <>
      <section className={s.section}>
        <h2 id="today" className={s.sectionTitle}>TODAY</h2>

        <CardList
          isCreateFormShown={createFormShown}
          onCloseForm={setCreateFormShown}
          cards={cards}
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
