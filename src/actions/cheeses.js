import { API_BASE_URL } from '../config';
import {
  FETCH_CHEESES_ERROR,
  FETCH_CHEESES_SUCCESS,
  FETCH_CHEESES_REQUEST,
} from './types';

const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST,
});

const fetchCheesesSuccess = cheeses => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses,
});

const fetchCheesesError = error => ({
  type: FETCH_CHEESES_ERROR,
  error,
});

// eslint-disable-next-line import/prefer-default-export
export const fetchCheeses = () => (dispatch) => {
  dispatch(fetchCheesesRequest());
  return fetch(`${API_BASE_URL}/api/cheeses`)
    .then((res) => {
      if (!res.ok) {
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.startsWith('application/json')) {
          return res.json().then(err => Promise.reject(err));
        }

        const error = new Error(res.statusText);
        error.code = res.status;
        return Promise.reject(error);
      }
      return res;
    })
    .then(res => res.json())
    .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
    .catch(error => dispatch(fetchCheesesError(error)));
};
