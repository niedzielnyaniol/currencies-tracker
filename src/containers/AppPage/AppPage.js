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
  componentWillMount() {
    this.props.loadData();
  }

  render() {
    return (
      this.props.loaded ?
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
                  onRowBtnClick={this.props.addCurrencyToFavourite}
                />
              </ItemContainerWrapper>
              <ItemContainerWrapper>
                <ItemContainer
                  title={this.props.intl.formatMessage(messages.favourites)}
                  rates={this.props.favouriteCurrencies}
                  onRowBtnClick={this.props.removeCurrencyFromFavourites}
                  onRemoveAll={this.props.removeAllFavouriteCurrencies}
                  areFavourites
                />
              </ItemContainerWrapper>
            </Content>
          </Card>
        </Container> : <div>wait</div>
    );
  }
}

AppPage.propTypes = {
  addCurrencyToFavourite: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(rateShape).isRequired,
  favouriteCurrencies: PropTypes.arrayOf(rateShape).isRequired,
  intl: intlShape.isRequired,
  loadData: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  removeAllFavouriteCurrencies: PropTypes.func.isRequired,
  removeCurrencyFromFavourites: PropTypes.func.isRequired,
};

export default injectIntl(AppPage);
