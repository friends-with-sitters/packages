import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';

import Theme from '@friendswithsitters/styles';

import { Text } from '../../text';
import { Screen } from '../../screen';
import { Divider } from '..';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('📏 Divider', module).addDecorator(StyleDecorator);

stories.add('Basic', () => (
  <Screen>
    <Text>When you have separate pieces of text that can span any number of lines.</Text>
    <Divider />
    <Text>It may be useful to use a divider to separate them.</Text>
  </Screen>
));
