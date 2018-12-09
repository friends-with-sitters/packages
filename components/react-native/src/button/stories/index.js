import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';

import Theme from '@friendswithsitters/styles';

import { Button } from '..';
import { Screen } from '../../screen';

const StyleDecorator = storyFn => <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>;

const stories = storiesOf('🔘 Buttons', module).addDecorator(StyleDecorator);

const types = {
  Negative: 'negative',
  Positive: 'positive',
  Neutral: 'neutral',
  Accent: 'accent',
  Primary: 'primary',
};

Object.keys(types).forEach(type => {
  const val = types[type];
  stories.add(type, () => (
    <Screen>
      <Button background={val} hue={200} onPress={() => {}}>
        Close Account
      </Button>
      <Button background={val} hue={300} onPress={() => {}}>
        Close Account
      </Button>
      <Button background={val} hue={400} onPress={() => {}}>
        Close Account
      </Button>
      <Button background={val} hue={500} onPress={() => {}}>
        Close Account
      </Button>
      <Button background={val} hue={600} onPress={() => {}}>
        Close Account
      </Button>
      <Button background={val} hue={700} onPress={() => {}}>
        Close Account
      </Button>
      <Button background={val} hue={800} onPress={() => {}}>
        Close Account
      </Button>
    </Screen>
  ));
});

stories.add('Clear', () => (
  <Screen>
    <Button background="clear" hue={800} onPress={() => {}}>
      Clear button to another screen
    </Button>
  </Screen>
));
