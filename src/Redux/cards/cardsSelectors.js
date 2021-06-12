const getActiveTodayCards = state =>
  state.cards.allCards.filter(({ isCompleted, deadline }) => {
    return (
      !isCompleted &&
      new Date().toLocaleDateString() ===
        new Date(deadline).toLocaleDateString()
    )
  })

const getActiveTomorrowCards = state =>
  state.cards.allCards.filter(({ isCompleted, deadline }) => {
    return (
      !isCompleted &&
      new Date().getDate()+1 ===
        new Date(deadline).getDate()
    )
  })

const getActiveThisWeekCards = state =>
  state.cards.allCards.filter(({ isCompleted, deadline }) => {
    return (
      !isCompleted
      && (new Date().getMonth() === new Date(deadline).getMonth())
      && ((new Date().getDay() >= new Date(deadline).getDay() &&
        new Date().getDate() + 7 > new Date(deadline).getDate())
        || (new Date(deadline).getDay() === 0 && new Date().getDate() + 7 > new Date(deadline).getDate()))
      && ((new Date().getDate() + 1 !== new Date(deadline).getDate()) &&
        (new Date().toLocaleDateString() !== new Date(deadline).toLocaleDateString())) 
    )
  })

const getActiveThisMonthCards = state =>
  state.cards.allCards.filter(({ isCompleted, deadline }) => {
    return (
      !isCompleted &&
      new Date().getMonth() === new Date(deadline).getMonth() &&
      (new Date().getDate() + 7 < new Date(deadline).getDate() ||
        new Date().getDay() < new Date(deadline).getDay()) &&
      new Date().getDate() + 1 !== new Date(deadline).getDate()
    )
  })

const getActiveNextMonthsCards = state =>
  state.cards.allCards.filter(({ isCompleted, deadline }) => {
    return (
      !isCompleted &&
      new Date().getMonth() < new Date(deadline).getMonth()
    )
  })

const getDoneCards = state =>
  state.cards.allCards.filter(({ isCompleted }) => isCompleted)

const getIsLoading = state => state.cards.isLoading

const cardsSelectors = {
  getActiveTodayCards,
  getActiveTomorrowCards,
  getActiveThisWeekCards,
  getActiveThisMonthCards,
  getActiveNextMonthsCards,
  getDoneCards,
  getIsLoading,
}
export default cardsSelectors
