import {
  LOAD_ERROR,
  LOAD_SUCCESS,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  REMOVE_ALL_FROM_FAVORITES,
} from '../actions/actionTypes';

const initialState = {
  currencies: [],
  favoriteCurrencies: [],
  loaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ERROR:
      throw new Error('Something went wrong');
    case LOAD_SUCCESS: {
      const currencies = action.data[0].rates;

      return {
        ...state,
        currencies,
        loaded: true,
      };
    }
    case ADD_TO_FAVORITES: {
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
    case REMOVE_FROM_FAVORITES: {
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
    case REMOVE_ALL_FROM_FAVORITES: {
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

export default reducer;
