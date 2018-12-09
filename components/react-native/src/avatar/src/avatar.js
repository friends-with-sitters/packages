import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components/native';
import { Animated, Easing, PixelRatio } from 'react-native';
import PropTypes from 'prop-types';

import { Text } from '../../text';

const { roundToNearestPixel: rounded } = PixelRatio;

const Overlay = styled.View`
  background: ${({ theme }) => theme.palette.neutral[200]};
  align-items: center;
  justify-content: center;
  width: ${({ width }) => rounded(width)}px;
  height: ${({ height }) => rounded(height)}px;
  overflow: hidden;
  border-radius: 9999px;
`;

const Placeholder = styled(Text)`
  margin: 0;
  font-weight: 700;
  margin-top: -1px;
  font-size: ${({ height }) => rounded(height * 0.32)}px;
`;

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      opacityAnim: new Animated.Value(0),
    };
  }

  componentWillMount() {
    const { fadeInDuration } = this.props;
    const { opacityAnim } = this.state;
    this.opacityAnimation = Animated.timing(opacityAnim, {
      toValue: 1,
      easing: Easing.ease,
      duration: fadeInDuration,
    });
  }

  imageDidLoad() {
    setTimeout(() => {
      this.setState(current => {
        if (!current.loaded) {
          this.opacityAnimation.start();
          return { ...current, loaded: true };
        }
        return current;
      });
    }, 120);
  }

  imageStyle() {
    const { loaded, opacityAnim: opacity } = this.state;
    const { width, height } = this.props;
    if (!loaded) {
      return { height: 1, width: 1 };
    }
    return { width, height, opacity };
  }

  render() {
    const { width, height, title, ...props } = this.props;
    const { loaded } = this.state;
    return (
      <Overlay width={width} height={height}>
        <Animated.Image {...props} onLoad={() => this.imageDidLoad()} style={this.imageStyle()} />
        {!loaded ? <Placeholder height={height}>{title}</Placeholder> : null}
      </Overlay>
    );
  }
}

Avatar.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fadeInDuration: PropTypes.number,
  source: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      uri: PropTypes.string.isRequired,
    }),
  ]).isRequired,
};

Avatar.defaultProps = {
  title: '',
  fadeInDuration: 600,
};

export default withTheme(Avatar);
