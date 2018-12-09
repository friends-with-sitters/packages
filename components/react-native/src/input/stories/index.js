import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';

import Theme from '@friendswithsitters/styles';

import { Input } from '..';
import { Screen } from '../../screen';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('🤓 Input', module).addDecorator(StyleDecorator);

stories.add('Basic Input', () => (
  <Screen>
    <Input placeholder="text input" />
  </Screen>
));

stories.add('Lightened Hue Input', () => (
  <Screen>
    <Input hue={600} placeholder="text input" />
  </Screen>
));

stories.add('Negative Color Input', () => (
  <Screen>
    <Input color="negative" placeholder="text input" />
  </Screen>
));

stories.add('Large Input', () => (
  <Screen>
    <Input variant="l" placeholder="text input" />
  </Screen>
));
