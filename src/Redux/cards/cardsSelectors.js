const getActiveTodayCards = state =>
  state.activeCards.filter(
    card => new Date().toLocaleDateString() === card.date,
  );
const getActiveTomorrowCards = state =>
  state.activeCards.filter(
    card => new Date().toLocaleDateString() !== card.date,
  );
const getDoneCards = state => state.doneCards;

const cardsSelectors = {
  getActiveTodayCards,
  getActiveTomorrowCards,
  getDoneCards,
};
export default cardsSelectors;
