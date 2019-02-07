import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppPage from '../components/AppPage';

import {
  addCurrencyToFavorite,
  loadData,
  removeAllFavoriteCurrencies,
  removeCurrencyFromFavorites,
} from '../reducers/currencyReducer';

class App extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return this.props.loaded ? (
      <AppPage {...this.props} />
    ) : 'Loading...';
  }
}

const mapStateToProps = (state) => ({
  ...state.currencyReducer,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    addCurrencyToFavorite,
    loadData,
    removeAllFavoriteCurrencies,
    removeCurrencyFromFavorites,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
