/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import { Card, Header } from 'semantic-ui-react';
import ItemContainer from '../../components/ItemContainer';

import rateShape from '../../components/ItemContainer/ItemContainer.shapes';

import messages from './AppPage.messages';

import {
  Content,
  Container,
  ItemContainerWrapper,
  HeaderWrapper,
} from './AppPage.styles';

class AppPage extends React.Component {
  static propTypes = {
    addCurrencyToFavorite: PropTypes.func.isRequired,
    currencies: PropTypes.arrayOf(rateShape).isRequired,
    favoriteCurrencies: PropTypes.arrayOf(rateShape).isRequired,
    intl: intlShape.isRequired,
    loadData: PropTypes.func.isRequired,
    removeAllFavoriteCurrencies: PropTypes.func.isRequired,
    removeCurrencyFromFavorites: PropTypes.func.isRequired,
    loaded: PropTypes.bool,
  };

  static defaultProps = {
    loaded: false,
  };

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      this.props.loaded ? (
        <Container>
          <Card fluid>
            <HeaderWrapper>
              <Header as="h1">{this.props.intl.formatMessage(messages.title)}</Header>
            </HeaderWrapper>
            <Content>
              <ItemContainerWrapper>
                <ItemContainer
                  title={this.props.intl.formatMessage(messages.currencies)}
                  rates={this.props.currencies}
                  onRowBtnClick={this.props.addCurrencyToFavorite}
                />
              </ItemContainerWrapper>
              <ItemContainerWrapper>
                <ItemContainer
                  title={this.props.intl.formatMessage(messages.favorites)}
                  rates={this.props.favoriteCurrencies}
                  onRowBtnClick={this.props.removeCurrencyFromFavorites}
                  onRemoveAll={this.props.removeAllFavoriteCurrencies}
                  areFavorites
                />
              </ItemContainerWrapper>
            </Content>
          </Card>
        </Container>
      ) : 'Loading...'
    );
  }
}

export default injectIntl(AppPage);
