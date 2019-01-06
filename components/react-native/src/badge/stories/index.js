import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';

import Theme from '@friendswithsitters/styles';

import { Badge } from '..';
import { Screen } from '../../screen';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('🎫 Badge', module).addDecorator(StyleDecorator);

stories.add('Normal Badge', () => (
  <Screen>
    <Badge variant="xs">2</Badge>
  </Screen>
));
