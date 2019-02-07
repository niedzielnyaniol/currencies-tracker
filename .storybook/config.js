import { addDecorator, configure } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';

addLocaleData(enLocaleData);

const messages = {
    en: {
      'app.currencyItem.bid': 'Bid',
      'app.currencyItem.ask': 'Ask',
      'app.currencyItem.addToFav': 'Add to favorites',
      'app.currencyItem.removeFromFav': 'Remove from favorites',
      'app.currencyItem.follow': 'Add to favorite to follow rates',
      'app.appPage.currencies': 'Currencies',
      'app.appPage.favorites': 'Favorites',
      'app.appPage.title': 'Currencies Tracker',
    },
};

const getMessages = (locale) => messages[locale];

setIntlConfig({
  locales: ['en'],
  defaultLocale: 'en',
  getMessages,
});

addDecorator(withIntl);

const req = require.context('../src/', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
