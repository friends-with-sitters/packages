import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';

import Theme from '@friendswithsitters/styles';

import { Screen } from '..';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('📽 Screen', module).addDecorator(StyleDecorator);

stories.add('Basic', () => <Screen />);
