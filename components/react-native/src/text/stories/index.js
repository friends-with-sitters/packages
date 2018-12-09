import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';

import Theme from '@friendswithsitters/styles';

import { Text } from '..';
import { Heading } from '../../heading';
import { Screen } from '../../screen';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('📓 Text', module).addDecorator(StyleDecorator);

stories.add('Colors', () => (
  <Screen>
    <Text color="accent" hue={600} variant="l">
      This is some text for the screen
    </Text>
    <Text color="negative" hue={600} variant="l">
      This is some text for the screen
    </Text>
    <Text color="positive" hue={600} variant="l">
      This is some text for the screen
    </Text>
    <Text color="neutral" hue={600} variant="l">
      This is some text for the screen
    </Text>
    <Text color="primary" hue={600} variant="l">
      This is some text for the screen
    </Text>
  </Screen>
));

stories.add('Lightened Hue', () => (
  <Screen>
    <Text color="negative" hue={300} variant="l">
      This is some text for the screen
    </Text>
  </Screen>
));

stories.add('Large', () => (
  <Screen>
    <Heading variant="l">Some Title</Heading>
    <Text variant="l">This is some text for the screen</Text>
  </Screen>
));

stories.add('Medium', () => (
  <Screen>
    <Heading variant="m">Some Title</Heading>
    <Text variant="m">This is some text for the screen</Text>
  </Screen>
));

stories.add('Small', () => (
  <Screen>
    <Heading variant="s">Some Title</Heading>
    <Text variant="s">This is some text for the screen</Text>
  </Screen>
));

stories.add('Extra Small', () => (
  <Screen>
    <Text variant="xs">This is some text for the screen</Text>
  </Screen>
));
