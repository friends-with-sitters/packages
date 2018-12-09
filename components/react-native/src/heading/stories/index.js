import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';

import Theme from '@friendswithsitters/styles';

import { Heading } from '..';
import { Screen } from '../../screen';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('🎙 Heading', module).addDecorator(StyleDecorator);

stories.add('Extra Large', () => (
  <Screen>
    <Heading variant="xl">An Extra Large Heading</Heading>
  </Screen>
));

stories.add('Large', () => (
  <Screen>
    <Heading variant="l">A Large Heading</Heading>
  </Screen>
));

stories.add('Medium', () => (
  <Screen>
    <Heading variant="m">A Medium Heading</Heading>
  </Screen>
));

stories.add('Small', () => (
  <Screen>
    <Heading variant="s">A Small Heading</Heading>
  </Screen>
));
