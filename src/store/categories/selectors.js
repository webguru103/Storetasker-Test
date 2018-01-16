export function getCategories(state) {
  return Object.values(state.categories.byId);
}
