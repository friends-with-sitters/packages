import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';
import { PixelRatio } from 'react-native';

import Theme from '@friendswithsitters/styles';

import { Screen } from '../../screen';
import { Avatar } from '..';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('👱🏻‍ Avatar', module).addDecorator(StyleDecorator);

const img = size => `https://via.placeholder.com/${PixelRatio.getPixelSizeForLayoutSize(size)}`;

stories.add('Small', () => (
  <Screen>
    <Avatar title="DK" source={{ uri: img(50) }} width={50} height={50} />
  </Screen>
));

stories.add('Medium', () => (
  <Screen>
    <Avatar title="EK" source={{ uri: img(120) }} width={120} height={120} />
  </Screen>
));

stories.add('Large', () => (
  <Screen>
    <Avatar title="S" source={{ uri: img(180) }} width={180} height={180} />
  </Screen>
));
