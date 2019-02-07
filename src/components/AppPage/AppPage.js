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

const AppPage = ({
  addCurrencyToFavorite,
  currencies,
  favoriteCurrencies,
  intl,
  removeAllFavoriteCurrencies,
  removeCurrencyFromFavorites,
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
            onRowBtnClick={addCurrencyToFavorite}
          />
        </ItemContainerWrapper>
        <ItemContainerWrapper>
          <ItemContainer
            title={intl.formatMessage(messages.favorites)}
            rates={favoriteCurrencies}
            onRowBtnClick={removeCurrencyFromFavorites}
            onRemoveAll={removeAllFavoriteCurrencies}
            areFavorites
          />
        </ItemContainerWrapper>
      </Content>
    </Card>
  </Container>
);

AppPage.propTypes = {
  addCurrencyToFavorite: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(rateShape).isRequired,
  favoriteCurrencies: PropTypes.arrayOf(rateShape).isRequired,
  intl: intlShape.isRequired,
  removeAllFavoriteCurrencies: PropTypes.func.isRequired,
  removeCurrencyFromFavorites: PropTypes.func.isRequired,
};

export default injectIntl(AppPage);
