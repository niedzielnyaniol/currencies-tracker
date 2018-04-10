import { defineMessages } from 'react-intl';

const messages = defineMessages({
  bid: {
    id: 'app.currencyItem.bid',
    defaultMessage: 'Bid',
  },
  ask: {
    id: 'app.currencyItem.ask',
    defaultMessage: 'Ask',
  },
});

const bidAskFormatter = (intl, bidValue, askValue, currency = 'PLN') => {
  const options = {
    style: 'currency',
    currency,
  };

  return (
    `${intl.formatMessage(messages.bid)}: ${intl.formatNumber(bidValue, options)} ` +
    `${intl.formatMessage(messages.ask)}: ${intl.formatNumber(askValue, options)}`
  );
};

export default bidAskFormatter;
