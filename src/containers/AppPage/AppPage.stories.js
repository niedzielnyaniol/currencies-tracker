import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AppPage from './';

const allCurrencies = [
  {
    currency: 'dolar amerykański', code: 'USD', bid: 3.3694, ask: 3.4374,
  },
  {
    currency: 'dolar australijski', code: 'AUD', bid: 2.5881, ask: 2.6403,
  },
  {
    currency: 'dolar kanadyjski', code: 'CAD', bid: 2.6391, ask: 2.6925,
  },
  {
    currency: 'euro', code: 'EUR', bid: 4.1524, ask: 4.2362,
  },
  {
    currency: 'forint (Węgry)', code: 'HUF', bid: 0.013318, ask: 0.013588,
  },
  {
    currency: 'frank szwajcarski', code: 'CHF', bid: 3.5216, ask: 3.5928,
  },
  {
    currency: 'funt szterling', code: 'GBP', bid: 4.7660, ask: 4.8622,
  },
  {
    currency: 'jen (Japonia)', code: 'JPY', bid: 0.031487, ask: 0.032123,
  },
  {
    currency: 'korona czeska', code: 'CZK', bid: 0.1638, ask: 0.1672,
  },
  {
    currency: 'korona duńska', code: 'DKK', bid: 0.5576, ask: 0.5688,
  },
  {
    currency: 'korona norweska', code: 'NOK', bid: 0.4331, ask: 0.4419,
  },
  {
    currency: 'korona szwedzka', code: 'SEK', bid: 0.4032, ask: 0.4114,
  },
  {
    currency: 'SDR (MFW)', code: 'XDR', bid: 4.9152, ask: 5.0144,
  },
];

storiesOf('AppPage', module)
  .add('default', () => (
    <AppPage
      currencies={allCurrencies.splice(3)}
      favouriteCurrencies={allCurrencies.splice(0, 3)}
      addCurrencyToFavourite={action('addCurrencyToFavourite')}
      removeCurrencyFromFavourites={action('removeCurrencyFromFavourites')}
      removeAllFavouriteCurrencies={action('removeAllFavouriteCurrencies')}
      loadData={action('loadData')}
    />
  ));
