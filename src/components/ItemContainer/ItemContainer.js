import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import { Item, Button, Header, Divider, Card } from 'semantic-ui-react';
import CurrencyItem from '../CurrencyItem';

import rateShape from './ItemContainer.shapes';

import messages from './ItemContainer.messages';

import {
  ScrollWrapper,
  Container,
  ButtonWrapper,
} from './ItemContainer.styles';

const ItemContainer = ({
  title,
  rates,
  intl,
  areFavorites,
  onRowBtnClick,
  onRemoveAll,
}) => (
  <Card fluid>
    <Container extraBottomPad={!areFavorites || (areFavorites && rates.length <= 1)}>
      <Header size="huge">{title}</Header>
      <Divider />
      <ScrollWrapper>
        <Item.Group divided>
          {
            rates.map((rate) => (
              <CurrencyItem
                {...rate}
                key={rate.code}
                isFavorite={areFavorites}
                onBtnClick={onRowBtnClick}
              />
            ))
          }
        </Item.Group>
      </ScrollWrapper>
      {
        areFavorites && rates.length > 1 ? (
          <ButtonWrapper>
            <Button onClick={onRemoveAll} color="red">
              {intl.formatMessage(messages.removeAll)}
            </Button>
          </ButtonWrapper>
        ) : null
      }
    </Container>
  </Card>
);

ItemContainer.propTypes = {
  intl: intlShape.isRequired,
  rates: PropTypes.arrayOf(rateShape).isRequired,
  title: PropTypes.string.isRequired,
  onRowBtnClick: PropTypes.func.isRequired,
  areFavorites: PropTypes.bool,
  onRemoveAll: PropTypes.func,
};

ItemContainer.defaultProps = {
  areFavorites: false,
  onRemoveAll: () => {},
};

export default injectIntl(ItemContainer);
