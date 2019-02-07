import { combineReducers } from 'redux';
import { reducer as currencyReducer } from '../containers/App/appReducer';

const rootReducer = combineReducers({
  currencyReducer,
});

export default rootReducer;
