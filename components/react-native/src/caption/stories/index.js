import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';

import Theme from '@friendswithsitters/styles';

import { Caption } from '..';
import { Screen } from '../../screen';
import { Heading } from '../../heading';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('🎤 Caption', module).addDecorator(StyleDecorator);

stories.add('Extra Large', () => (
  <Screen>
    <Caption variant="xl">A caption that accompanies the heading</Caption>
    <Heading variant="xl">An Extra Large Heading</Heading>
  </Screen>
));

stories.add('Large', () => (
  <Screen>
    <Caption variant="l">Another caption</Caption>
    <Heading variant="l">A Large Heading</Heading>
  </Screen>
));

stories.add('Medium', () => (
  <Screen>
    <Caption variant="m">Some other caption</Caption>
    <Heading variant="m">A Medium Heading</Heading>
  </Screen>
));
