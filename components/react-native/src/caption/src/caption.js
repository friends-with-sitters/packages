import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';

const sizes = {
  xl: 27,
  l: 24,
  m: 19,
};

const marginBottom = {
  xl: 5,
  l: 5,
  m: 0,
};

const Heading = styled.Text`
  color: ${({ theme }) => theme.palette.neutral[400]};
  font-size: ${({ variant }) => PixelRatio.roundToNearestPixel(sizes[variant])}px;
  margin-top: 0;
  margin-right: 12%;
  margin-left: ${PixelRatio.roundToNearestPixel(10)}px;
  margin-bottom: ${({ variant }) => PixelRatio.roundToNearestPixel(marginBottom[variant])}px;
`;

Heading.propTypes = {
  variant: PropTypes.string,
};

Heading.defaultProps = {
  variant: 'xl',
};

export default withTheme(Heading);
