import {
  LOAD_ERROR,
  LOAD_SUCCESS,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  REMOVE_ALL_FROM_FAVOURITES,
} from '../actions/actionTypes';

const initialState = {
  currencies: [],
  favouriteCurrencies: [],
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
    case ADD_TO_FAVOURITES: {
      const currencies = [...state.currencies];
      const favouriteCurrencies = [...state.favouriteCurrencies];

      const favourite = currencies.find((currency) => (
        currency.code === action.currency
      ));

      const indexToDelete = currencies.indexOf(favourite);

      currencies.splice(indexToDelete, 1);
      favouriteCurrencies.push(favourite);

      return {
        ...state,
        currencies,
        favouriteCurrencies,
      };
    }
    case REMOVE_FROM_FAVOURITES: {
      const currencies = [...state.currencies];
      const favouriteCurrencies = [...state.favouriteCurrencies];

      const deleted = favouriteCurrencies.find((currency) => (
        currency.code === action.currency
      ));

      const indexToDelete = favouriteCurrencies.indexOf(deleted);

      favouriteCurrencies.splice(indexToDelete, 1);
      currencies.unshift(deleted);

      return {
        ...state,
        currencies,
        favouriteCurrencies,
      };
    }
    case REMOVE_ALL_FROM_FAVOURITES: {
      const currencies = [...state.currencies];
      const favouriteCurrencies = [...state.favouriteCurrencies];

      favouriteCurrencies.forEach((currency) => {
        currencies.unshift(currency);
      });

      return {
        ...state,
        currencies,
        favouriteCurrencies: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
