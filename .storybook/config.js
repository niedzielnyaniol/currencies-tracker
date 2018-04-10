import { addDecorator, configure } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';

addLocaleData(enLocaleData);

const messages = {
    en: {
      'app.currencyItem.bid': 'Bid',
      'app.currencyItem.ask': 'Ask',
      'app.currencyItem.addToFav': 'Add to favourites',
      'app.currencyItem.removeFromFav': 'Remove from favourites',
      'app.currencyItem.follow': 'Add to favourite to follow rates',
    },
};

const getMessages = (locale) => messages[locale];

setIntlConfig({
  locales: ['en'],
  defaultLocale: 'en',
  getMessages,
});

addDecorator(withIntl);

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
