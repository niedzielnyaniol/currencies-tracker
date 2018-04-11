import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import { Card, Header } from 'semantic-ui-react';
import ItemContainer from '../ItemContainer';

import rateShape from '../ItemContainer/ItemContainer.shapes';

import messages from './AppPage.messages';

import {
  Content,
  Container,
  ItemContainerWrapper,
  HeaderWrapper,
} from './AppPage.styles';

const AppPage = ({
  intl,
  currencies,
  favouriteCurrencies,
  addCurrencyToFavourite,
  removeCurrencyFromFavourites,
  removeAllFavouriteCurrency,
}) => (
  <Container>
    <Card fluid>
      <HeaderWrapper>
        <Header as="h1">{intl.formatMessage(messages.title)}</Header>
      </HeaderWrapper>
      <Content>
        <ItemContainerWrapper>
          <ItemContainer
            title={intl.formatMessage(messages.currencies)}
            rates={currencies}
            onRowBtnClick={addCurrencyToFavourite}
          />
        </ItemContainerWrapper>
        <ItemContainerWrapper>
          <ItemContainer
            title={intl.formatMessage(messages.favourites)}
            rates={favouriteCurrencies}
            onRowBtnClick={removeCurrencyFromFavourites}
            onRemoveAll={removeAllFavouriteCurrency}
            areFavourites
          />
        </ItemContainerWrapper>
      </Content>
    </Card>
  </Container>
);

AppPage.propTypes = {
  addCurrencyToFavourite: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(rateShape).isRequired,
  favouriteCurrencies: PropTypes.arrayOf(rateShape).isRequired,
  intl: intlShape.isRequired,
  removeAllFavouriteCurrency: PropTypes.func.isRequired,
  removeCurrencyFromFavourites: PropTypes.func.isRequired,
};

export default injectIntl(AppPage);
