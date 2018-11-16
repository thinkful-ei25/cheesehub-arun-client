import { combineReducers } from 'redux';

import cheeses, { selectors as cheeseSelectors } from './cheeses';

export default combineReducers({
  cheeses,
});

// Cheese selectors
export const getCheeses = state => cheeseSelectors.getCheeses(state.cheeses);
export const getLoading = state => cheeseSelectors.getLoading(state.cheeses);
export const getError = state => cheeseSelectors.getError(state.cheeses);
