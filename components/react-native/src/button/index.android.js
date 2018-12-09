import { TouchableNativeFeedback } from 'react-native';

import Component from './src/button';

TouchableNativeFeedback.defaultProps = {
  background: TouchableNativeFeedback.SelectableBackground(),
};

export const Button = Component(TouchableNativeFeedback);
