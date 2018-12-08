import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';

import Theme from '@friendswithsitters/styles';

import { Input } from '..';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('🤓 Input', module).addDecorator(StyleDecorator);

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
`;

stories.add('Basic Input', () => (
  <StyledView>
    <Input placeholder="text input" />
  </StyledView>
));
