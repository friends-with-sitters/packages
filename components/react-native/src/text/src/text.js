import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';

const sizes = {
  l: 24,
  m: 19,
  s: 16,
  xs: 14,
};

const Text = styled.Text`
  color: ${({ theme, color, hue }) => theme.palette[color][hue]};
  font-weight: 400;
  margin: ${PixelRatio.roundToNearestPixel(5)}px ${PixelRatio.roundToNearestPixel(10)}px;
  font-size: ${({ variant }) => PixelRatio.roundToNearestPixel(sizes[variant])}px;
`;

Text.propTypes = {
  hue: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.string,
};

Text.defaultProps = {
  color: 'neutral',
  hue: 600,
  variant: 'm',
};

export default withTheme(Text);
