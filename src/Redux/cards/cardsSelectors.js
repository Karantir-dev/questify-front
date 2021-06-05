const getActiveTodayCards = state =>
  state.cards.allCards
    .filter(({ isCompleted }) => !isCompleted)
    .filter(card => new Date().toLocaleDateString() === card.date)

const getActiveTomorrowCards = state =>
  state.cards.allCards
    .filter(({ isCompleted }) => !isCompleted)
    .filter(card => new Date().toLocaleDateString() !== card.date)

const getDoneCards = state =>
  state.cards.allCards.filter(({ isCompleted }) => isCompleted)

const getIsLoading = state => state.cards.loading

const getError = state => state.cards.error

const cardsSelectors = {
  getActiveTodayCards,
  getActiveTomorrowCards,
  getDoneCards,
  getIsLoading,
  getError,
}
export default cardsSelectors
