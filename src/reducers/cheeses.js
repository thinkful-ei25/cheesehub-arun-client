import {
  FETCH_CHEESES_ERROR,
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_SUCCESS,
} from '../actions/types';

const initialState = {
  cheeses: [],
  loading: false,
  error: null,
};

export default function cheeseReducer(state = initialState, action) {
  if (action.type === FETCH_CHEESES_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === FETCH_CHEESES_SUCCESS) {
    return {
      ...state,
      loading: false,
      cheeses: action.cheeses,
      error: null,
    };
  }

  if (action.type === FETCH_CHEESES_ERROR) {
    return {
      ...state,
      loading: false,
      cheeses: [],
      error: action.error,
    };
  }

  return state;
}
