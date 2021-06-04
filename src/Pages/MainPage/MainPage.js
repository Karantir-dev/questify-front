import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import CardList from '../../Components/CardList/CardList';
import Header from '../../Components/Header/Header';
import Icon from '../../Components/Icon';

import cardsOperations from '../../Redux/cards/cardsOperations';
import cardsSelectors from '../../Redux/cards/cardsSelectors';

import s from './MainPage.module.css';

export default function Main() {
  const [doneIsShown, setDoneIsShown] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardsOperations.fetchActiveCards());
  }, [dispatch]);

  // const activeTodayCards = useSelector(cardsSelectors.getActiveTodayCards);
  // const activeTomorrowCards = useSelector(
  //   cardsSelectors.getActiveTomorrowCards,
  // );
  const doneCards = useSelector(cardsSelectors.getDoneCards);

  function onShowDone() {
    setDoneIsShown(!doneIsShown);

    if (doneCards.length >= 1) {
      dispatch(cardsOperations.fetchDoneCards());
    }
  }

  return (
    <div>
      <Header />
      <section className={s.section}>
        <h2 className={s.sectionTitle}>TODAY</h2>
        {/* <CardList cards={activeTodayCards}/> */}
      </section>

      <section className={s.section}>
        <h2 className={s.sectionTitle}>TOMORROW</h2>
        {/* <CardList cards={activeTomorrowCards}/> */}
      </section>

      <section className={s.sectionDone}>
        <div className={s.lineWrapper}>
          <button className={s.btnDone} onClick={onShowDone}>
            DONE
            <Icon
              name={doneIsShown ? 'triangle-up' : 'triangle-down'}
              size={12}
            />
          </button>
        </div>

        {/*doneIsShown &&  <CardList cards={doneCards}/> */}
      </section>
    </div>
  );
}