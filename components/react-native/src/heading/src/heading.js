import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';

const sizes = {
  xl: 48,
  l: 36,
  m: 24,
  s: 19,
};

const Heading = styled.Text`
  color: ${({ theme }) => theme.palette.neutral[700]};
  font-weight: 700;
  font-size: ${({ theme, variant }) => PixelRatio.roundToNearestPixel(sizes[variant])}px;
  margin-top: 0;
  margin-right: ${PixelRatio.roundToNearestPixel(10)}px
  margin-left: ${PixelRatio.roundToNearestPixel(10)}px
  margin-bottom: ${PixelRatio.roundToNearestPixel(30)}px;
`;

Heading.propTypes = {
  variant: PropTypes.string,
};

Heading.defaultProps = {
  variant: 'xl',
};

export default withTheme(Heading);
