import React from 'react';

import Text from './text';
import View from './view';

const Button = PlatformComponent => ({ onPress, children, ...props }) => (
  <PlatformComponent onPress={onPress}>
    <View {...props}>
      <Text>{children}</Text>
    </View>
  </PlatformComponent>
);

export default Button;
