export default function main() {
  return <h1>Main page</h1>;
}
// Рендерит хедер, два списка карточек (Today, Tomorrow - компонент CardList) кнопку Done
// При монтировании феттчит все НЕ выполненные карточки и кладет в CardList-ы (Today, Tomorrow)
// По клику на кнопку Done фетчится список выполненных карточек и рендерится третий CardList
