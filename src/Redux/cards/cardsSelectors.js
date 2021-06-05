const getActiveTodayCards = state =>
  state.cards.allCards.filter(
    card => new Date().toLocaleDateString() === card.date,
  )
const getActiveTomorrowCards = state =>
  state.cards.allCards.filter(
    card => new Date().toLocaleDateString() !== card.date,
  )
const getDoneCards = state => state.doneCards

const cardsSelectors = {
  getActiveTodayCards,
  getActiveTomorrowCards,
  getDoneCards,
}
export default cardsSelectors
