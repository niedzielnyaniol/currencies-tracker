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
  isFavourite,
  onAddToFavClick,
  onRemoveFromFavClick,
}) => {
  let meta = intl.formatMessage(messages.follow);

  if (isFavourite) {
    meta = bidAskFormatter(intl, bid, ask);
  }

  return (
    <Item>
      <Item.Content
        header={`${currency} (${code})`}
        meta={meta}
      />
      {
        isFavourite ?
          <Button onClick={onRemoveFromFavClick} secondary>
            {intl.formatMessage(messages.removeFromFav)}
          </Button> :
          <Button onClick={onAddToFavClick} primary>
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
  isFavourite: PropTypes.bool,
  onAddToFavClick: PropTypes.func,
  onRemoveFromFavClick: PropTypes.func,
};

CurrencyItem.defaultProps = {
  isFavourite: false,
  onAddToFavClick: () => {},
  onRemoveFromFavClick: () => {},
};

export default injectIntl(CurrencyItem);
