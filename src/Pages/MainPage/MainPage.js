import CardList from '../../Components/CardList/CardList';
import Icon from '../../Components/Icon';
import s from './MainPage.module.css';

export default function Main() {
  return (
    <div>
      {/* <CardList cards={}/> */}
      {/* <CardList cards={}/> */}
      <button className={s.btn}>
        DONE
        <Icon name={'triangle-down'} size={12} />
      </button>
      {/* <CardList cards={}/> */}
    </div>
  );
}
// Рендерит хедер, два списка карточек (Today, Tomorrow - компонент CardList) кнопку Done
// При монтировании феттчит все НЕ выполненные карточки и кладет в CardList-ы (Today, Tomorrow)
// По клику на кнопку Done фетчится список выполненных карточек и рендерится третий CardList
