import CardList from '../../Components/CardList/CardList'
import IconButton from '../../Components/IconButton/IconButton'
import Icon from '../../Components/Icon'
import CardInfo from '../../Components/CardInfo/CardInfo'
import { useState } from 'react'

import s from '../../Pages/MainPage/MainPage.module.css'
// import StaticCard from '../StaticCard/StaticCard'

export default function TodaySection({ cards }) {
  const [createFormShown, setCreateFormShown] = useState(false)

  return (
    <>
      <section className={s.section}>
        <h2 className={s.sectionTitle}>TODAY</h2>
        {/* <StaticCard
          isChallenge={true}
          difficulty="Hard"
          category="work"
          deadline={new Date('2021-06-17')}
          text="qweqweqaaaaaaaaaaaaaaaaaaaaaaawe"
        /> */}
        <CardInfo title="To add a new card, click the button in the lower right corner" />

        <CardList
          isCreateFormShown={createFormShown}
          onCloseForm={setCreateFormShown}
          cards={cards}
        />
      </section>

      <div className={s.buttonAddContainer}>
        <IconButton
          className={s.buttonAddCard}
          onClick={() => setCreateFormShown(true)}
          aria-label="Add"
        >
          <Icon className={s.Icon} name={'plus'} size={15} />
        </IconButton>
      </div>
    </>
  )
}
