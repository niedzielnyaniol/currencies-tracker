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
        onAddToFavClick={action('onAddToFavClick')}
      />
    </Item.Group>
  ))
  .add('favourite', () => (
    <Item.Group divided>
      <CurrentItem
        currency="dolar amerykański"
        code="USD"
        bid={3.3694}
        ask={3.4374}
        isFavourite
        onRemoveFromFavClick={action('onRemoveFromFavClick')}
      />
    </Item.Group>
  ));
