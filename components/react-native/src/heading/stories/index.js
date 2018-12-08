import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';

import Theme from '@friendswithsitters/styles';

import { Heading } from '..';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('🎙 Heading', module).addDecorator(StyleDecorator);

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
`;

stories.add('Extra Large', () => (
  <StyledView>
    <Heading variant="xl">An Extra Large Heading</Heading>
  </StyledView>
));

stories.add('Large', () => (
  <StyledView>
    <Heading variant="l">A Large Heading</Heading>
  </StyledView>
));

stories.add('Medium', () => (
  <StyledView>
    <Heading variant="m">A Medium Heading</Heading>
  </StyledView>
));

stories.add('Small', () => (
  <StyledView>
    <Heading variant="s">A Small Heading</Heading>
  </StyledView>
));
