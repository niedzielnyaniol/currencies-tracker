import ApiManager from '../utils/ApiManager';

const actionTypes = {
  LOAD_SUCCESS: 'LOAD_SUCCESS',
  LOAD_ERROR: 'LOAD_ERROR',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
  REMOVE_ALL_FROM_FAVORITES: 'REMOVE_ALL_FROM_FAVORITES',
};

const initialState = {
  currencies: [],
  favoriteCurrencies: [],
  loaded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ERROR: {
      throw new Error('Something went wrong');
    }

    case actionTypes.LOAD_SUCCESS: {
      const currencies = action.data[0].rates;

      return {
        ...state,
        currencies,
        loaded: true,
      };
    }

    case actionTypes.ADD_TO_FAVORITES: {
      const currencies = [...state.currencies];
      const favoriteCurrencies = [...state.favoriteCurrencies];

      const favorite = currencies.find((currency) => (
        currency.code === action.currency
      ));

      const indexToDelete = currencies.indexOf(favorite);

      currencies.splice(indexToDelete, 1);
      favoriteCurrencies.push(favorite);

      return {
        ...state,
        currencies,
        favoriteCurrencies,
      };
    }

    case actionTypes.REMOVE_FROM_FAVORITES: {
      const currencies = [...state.currencies];
      const favoriteCurrencies = [...state.favoriteCurrencies];

      const deleted = favoriteCurrencies.find((currency) => (
        currency.code === action.currency
      ));

      const indexToDelete = favoriteCurrencies.indexOf(deleted);

      favoriteCurrencies.splice(indexToDelete, 1);
      currencies.unshift(deleted);

      return {
        ...state,
        currencies,
        favoriteCurrencies,
      };
    }

    case actionTypes.REMOVE_ALL_FROM_FAVORITES: {
      const currencies = [...state.currencies];
      const favoriteCurrencies = [...state.favoriteCurrencies];

      favoriteCurrencies.forEach((currency) => {
        currencies.unshift(currency);
      });

      return {
        ...state,
        currencies,
        favoriteCurrencies: [],
      };
    }

    default:
      return state;
  }
};

export const addCurrencyToFavorite = (currency) => ({
  type: actionTypes.ADD_TO_FAVORITES,
  currency,
});

export const removeCurrencyFromFavorites = (currency) => ({
  type: actionTypes.REMOVE_FROM_FAVORITES,
  currency,
});

export const removeAllFavoriteCurrencies = (favoriteCurrencies) => ({
  type: actionTypes.REMOVE_ALL_FROM_FAVORITES,
  currencies: favoriteCurrencies,
});

const onLoadSuccess = (data) => ({
  type: actionTypes.LOAD_SUCCESS,
  data,
});

const onLoadError = () => ({
  type: actionTypes.LOAD_ERROR,
});

export const loadData = () => (dispatch) => {
  ApiManager.getData(
    'api/exchangerates/tables/c',
    dispatch,
    onLoadSuccess,
    onLoadError,
  );
};
