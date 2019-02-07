import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Item } from 'semantic-ui-react';

import CurrentItem from './';

storiesOf('CurrentItem', module)
  .add('default', () => (
    <Item.Group divided>
      <CurrentItem
        currency="dolar amerykański"
        code="USD"
        bid={3.3694}
        ask={3.4374}
        onBtnClick={action('onAddToFavClick')}
      />
    </Item.Group>
  ))
  .add('favorite', () => (
    <Item.Group divided>
      <CurrentItem
        currency="dolar amerykański"
        code="USD"
        bid={3.3694}
        ask={3.4374}
        isFavorite
        onBtnClick={action('onRemoveFromFavClick')}
      />
    </Item.Group>
  ));
