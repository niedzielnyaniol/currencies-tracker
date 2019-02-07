import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import { Item, Button } from 'semantic-ui-react';

import bidAskFormatter from '../../utils/bidAskFormatter';

import messages from './CurrencyItem.messages';

const CurrencyItem = ({
  ask,
  bid,
  code,
  currency,
  intl,
  isFavorite,
  onBtnClick,
}) => {
  let meta = intl.formatMessage(messages.follow);

  if (isFavorite) {
    meta = bidAskFormatter(intl, bid, ask);
  }

  return (
    <Item>
      <Item.Content
        header={`${currency} (${code})`}
        meta={meta}
      />
      {
        isFavorite ?
          <Button onClick={() => onBtnClick(code)} secondary>
            {intl.formatMessage(messages.removeFromFav)}
          </Button> :
          <Button onClick={() => onBtnClick(code)} primary>
            {intl.formatMessage(messages.addToFav)}
          </Button>
      }
    </Item>
  );
};

CurrencyItem.propTypes = {
  ask: PropTypes.number.isRequired,
  bid: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
  onBtnClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
};

CurrencyItem.defaultProps = {
  isFavorite: false,
};

export default injectIntl(CurrencyItem);
