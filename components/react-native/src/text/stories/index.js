import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';

import Theme from '@friendswithsitters/styles';

import { Text } from '..';
import { Heading } from '../../heading';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('📓 Text', module).addDecorator(StyleDecorator);

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
`;

stories.add('Colors', () => (
  <StyledView>
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
  </StyledView>
));

stories.add('Lightened Hue', () => (
  <StyledView>
    <Text color="negative" hue={300} variant="l">
      This is some text for the screen
    </Text>
  </StyledView>
));

stories.add('Large', () => (
  <StyledView>
    <Heading variant="l">Some Title</Heading>
    <Text variant="l">This is some text for the screen</Text>
  </StyledView>
));

stories.add('Medium', () => (
  <StyledView>
    <Heading variant="m">Some Title</Heading>
    <Text variant="m">This is some text for the screen</Text>
  </StyledView>
));

stories.add('Small', () => (
  <StyledView>
    <Heading variant="s">Some Title</Heading>
    <Text variant="s">This is some text for the screen</Text>
  </StyledView>
));

stories.add('Extra Small', () => (
  <StyledView>
    <Text variant="xs">This is some text for the screen</Text>
  </StyledView>
));
