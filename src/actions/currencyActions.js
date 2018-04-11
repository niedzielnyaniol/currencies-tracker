import * as actions from './actionTypes';

import ApiManager from '../utils/ApiManager';

export const addCurrencyToFavourite = (currency) => ({
  type: actions.ADD_TO_FAVOURITES,
  currency,
});

export const removeCurrencyFromFavourites = (currency) => ({
  type: actions.REMOVE_FROM_FAVOURITES,
  currency,
});

export const removeAllFavouriteCurrencies = (favouriteCurrencies) => ({
  type: actions.REMOVE_ALL_FROM_FAVOURITES,
  currencies: favouriteCurrencies,
});

const onLoadSucces = (data) => ({
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
    onLoadSucces,
    onLoadError,
  );
};
