import React from 'react';
import { withTheme } from 'styled-components/native';
import PropTypes from 'prop-types';

import Text from './text';
import View from './view';

const Button = PlatformComponent =>
  withTheme(props => {
    const { disabled, children, theme, background, hue, ...controls } = props;
    const underlayColor = theme.palette[background][hue].brighter(4);
    return (
      <PlatformComponent
        {...controls}
        activeOpacity={disabled ? 0 : 0.8}
        underlayColor={underlayColor}
      >
        <View {...props}>
          <Text {...props}>{children}</Text>
        </View>
      </PlatformComponent>
    );
  });

Button.propTypes = {
  disabled: PropTypes.bool,
  background: PropTypes.string,
  hue: PropTypes.number,
};

Button.defaultProps = {
  disabled: false,
  background: 'primary',
  hue: 800,
};

export default Button;
