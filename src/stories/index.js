import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../features/common/Button';

storiesOf('Button', module)
  .add('Default', () => (
    <Button onClick={action('clicked')} label="Hello World!" />
  ))
  .add('Tiny', () => (
    <Button onClick={action('clicked')} label="Hello World!" modifier="button--tiny" />
  ))
  .add('Disabled', () => (
    <Button onClick={action('clicked')} label="I am disabled :(" disabled />
  ));
