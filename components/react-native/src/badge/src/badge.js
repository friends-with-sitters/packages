import React from 'react';
import { withTheme } from 'styled-components/native';

import Text from '../../button/src/text';

import View from './view';

const Badge = ({ children, ...props }) => (
  <View {...props}>
    <Text {...props}>{children}</Text>
  </View>
);

Badge.propTypes = {
  ...Text.propTypes,
  ...View.propTypes,
};

Badge.defaultProps = {
  ...Text.defaultProps,
  ...View.defaultProps,
};

export default withTheme(Badge);
