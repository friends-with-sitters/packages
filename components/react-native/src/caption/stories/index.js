import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';

import Theme from '@friendswithsitters/styles';

import { Caption } from '..';
import { Heading } from '../../heading';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('🎤 Caption', module).addDecorator(StyleDecorator);

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
`;

stories.add('Extra Large', () => (
  <StyledView>
    <Caption variant="xl">A caption that accompanies the heading</Caption>
    <Heading variant="xl">An Extra Large Heading</Heading>
  </StyledView>
));

stories.add('Large', () => (
  <StyledView>
    <Caption variant="l">Another caption</Caption>
    <Heading variant="l">A Large Heading</Heading>
  </StyledView>
));

stories.add('Medium', () => (
  <StyledView>
    <Caption variant="m">Some other caption</Caption>
    <Heading variant="m">A Medium Heading</Heading>
  </StyledView>
));
