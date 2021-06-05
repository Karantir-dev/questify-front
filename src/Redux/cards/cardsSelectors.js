const getActiveTodayCards = state =>
  state.cards.activeCards.filter(
    card => new Date().toLocaleDateString() === card.date,
  )

const getActiveTomorrowCards = state =>
  state.cards.activeCards.filter(
    card => new Date().toLocaleDateString() !== card.date,
  )

const getDoneCards = state => state.cards.doneCards

const getIsLoading = state => state.cards.loading

const getError = state => state.cards.error

const cardsSelectors = {
  getActiveTodayCards,
  getActiveTomorrowCards,
  getDoneCards,
  getIsLoading,
  getError
}
export default cardsSelectors
