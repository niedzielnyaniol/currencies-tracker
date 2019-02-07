import { combineReducers } from 'redux';
import { reducer as currencyReducer } from './currencyReducer';

const rootReducer = combineReducers({
  currencyReducer,
});

export default rootReducer;
