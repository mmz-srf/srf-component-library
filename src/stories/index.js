import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../features/common/Button';
import ButtonStyled from '../features/common/Button-Styled';

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

storiesOf('ButtonStyled', module)
  .add('Default', () => (
    <ButtonStyled onClick={action('clicked')} label="Hello World!" />
  ))
  .add('Tiny', () => (
    <ButtonStyled onClick={action('clicked')} label="Hello World!" tiny />
  ))
  .add('Disabled', () => (
    <ButtonStyled onClick={action('clicked')} label="I am disabled :(" disabled />
  ));
