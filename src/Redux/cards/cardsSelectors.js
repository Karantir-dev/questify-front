const getActiveTodayCards = state =>
  state.cards.allCards.filter(({ isCompleted, deadline }) => {
    return !isCompleted && new Date().toLocaleDateString() === deadline
  })

const getActiveTomorrowCards = state =>
  state.cards.allCards.filter(({ isCompleted, deadline }) => {
    return !isCompleted && new Date().toLocaleDateString() === deadline
  })

const getDoneCards = state =>
  state.cards.allCards.filter(({ isCompleted }) => isCompleted)

const getIsLoading = state => state.cards.isLoading

const cardsSelectors = {
  getActiveTodayCards,
  getActiveTomorrowCards,
  getDoneCards,
  getIsLoading,
}
export default cardsSelectors
