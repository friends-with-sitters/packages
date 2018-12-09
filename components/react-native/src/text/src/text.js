import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';

const { roundToNearestPixel: rounded } = PixelRatio;

const Text = styled.Text`
  color: ${({ theme, color, hue }) => theme.palette[color][hue]};
  font-weight: 400;
  margin: ${({ theme }) => rounded(theme.spacing.units[1])}px 0;
  font-size: ${({ theme, variant }) => rounded(theme.typography.text[variant])}px;
`;

Text.propTypes = {
  hue: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.string,
};

Text.defaultProps = {
  color: 'neutral',
  variant: 'm',
  hue: 600,
};

export default withTheme(Text);
