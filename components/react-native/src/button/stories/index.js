import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';

import Theme from '@friendswithsitters/styles';

import { Button } from '..';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('🔘 Buttons', module).addDecorator(StyleDecorator);

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: papayawhip;
`;

stories.add('Default', () => (
  <StyledView>
    <Button onPress={() => {}}>Hello</Button>
  </StyledView>
));
