import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';

const { roundToNearestPixel: rounded } = PixelRatio;

const Divider = styled.View`
  background: ${({ theme, color, hue }) => theme.palette[color][hue]};
  margin: ${({ theme }) => rounded(theme.spacing.units[2])}px 0;
  height: ${() => rounded(1)}px;
`;

Divider.propTypes = {
  color: PropTypes.string,
  hue: PropTypes.number,
};

Divider.defaultProps = {
  color: 'neutral',
  hue: 200,
};

export default withTheme(Divider);
