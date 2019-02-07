import React from 'react';
import PropTypes from 'prop-types';

import AppPage from '../../components/AppPage';
import rateShape from '../../components/ItemContainer/ItemContainer.shapes';

class StatefulApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: props.allCurrencies,
      favoriteCurrencies: [],
    };
  }

  addCurrencyToFavorite = (selectedCurrency) => {
    const currencies = [...this.state.currencies];
    const favoriteCurrencies = [...this.state.favoriteCurrencies];

    const favorite = currencies.find((currency) => (
      currency.code === selectedCurrency
    ));

    const indexToDelete = currencies.indexOf(favorite);

    currencies.splice(indexToDelete, 1);
    favoriteCurrencies.push(favorite);

    this.setState({
      currencies,
      favoriteCurrencies,
    });
  }

  removeAllFavoriteCurrencies = () => {
    this.setState({
      currencies: this.props.allCurrencies,
      favoriteCurrencies: [],
    });
  }

  removeCurrencyFromFavorites = (selectedCurrency) => {
    const currencies = [...this.state.currencies];
    const favoriteCurrencies = [...this.state.favoriteCurrencies];

    const deleted = favoriteCurrencies.find((currency) => (
      currency.code === selectedCurrency
    ));

    const indexToDelete = favoriteCurrencies.indexOf(deleted);

    favoriteCurrencies.splice(indexToDelete, 1);
    currencies.unshift(deleted);

    this.setState({
      currencies,
      favoriteCurrencies,
    });
  }

  render() {
    return (
      <AppPage
        currencies={this.state.currencies}
        favoriteCurrencies={this.state.favoriteCurrencies}
        addCurrencyToFavorite={this.addCurrencyToFavorite}
        removeCurrencyFromFavorites={this.removeCurrencyFromFavorites}
        removeAllFavoriteCurrencies={this.removeAllFavoriteCurrencies}
      />
    );
  }
}

StatefulApp.propTypes = {
  allCurrencies: PropTypes.arrayOf(rateShape).isRequired,
};

export default StatefulApp;
