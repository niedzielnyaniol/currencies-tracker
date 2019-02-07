import * as actions from './actionTypes';

import ApiManager from '../utils/ApiManager';

export const addCurrencyToFavorite = (currency) => ({
  type: actions.ADD_TO_FAVORITES,
  currency,
});

export const removeCurrencyFromFavorites = (currency) => ({
  type: actions.REMOVE_FROM_FAVORITES,
  currency,
});

export const removeAllFavoriteCurrencies = (favoriteCurrencies) => ({
  type: actions.REMOVE_ALL_FROM_FAVORITES,
  currencies: favoriteCurrencies,
});

const onLoadSuccess = (data) => ({
  type: actions.LOAD_SUCCESS,
  data,
});

const onLoadError = () => ({
  type: actions.LOAD_ERROR,
});

export const loadData = () => (dispatch) => {
  ApiManager.getData(
    'api/exchangerates/tables/c',
    dispatch,
    onLoadSuccess,
    onLoadError,
  );
};
