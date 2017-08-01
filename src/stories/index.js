import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Home', module)
  .add('with counter', () => (
    <Home counter={10} increment={action('incremented')}/>
  ));
