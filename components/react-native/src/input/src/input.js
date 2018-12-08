import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';

const Input = styled.TextInput`
  border-radius: ${PixelRatio.roundToNearestPixel(3)}px;
  margin: ${PixelRatio.roundToNearestPixel(20)}px ${PixelRatio.roundToNearestPixel(10)}px;
  padding: ${PixelRatio.roundToNearestPixel(8)}px ${PixelRatio.roundToNearestPixel(10)}px;
  background: ${({ theme, background, hue }) => theme.palette[background][hue]};
`;

Input.propTypes = {
  background: PropTypes.string,
  hue: PropTypes.number,
};

Input.defaultProps = {
  background: 'neutral',
  hue: 200,
};

export default withTheme(Input);
