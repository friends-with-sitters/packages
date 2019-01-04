import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';

const { roundToNearestPixel: rounded } = PixelRatio;

const constrain = (palette, hue) =>
  palette[
    Math.max(Math.min(...Object.keys(palette)), Math.min(hue, Math.max(...Object.keys(palette))))
  ];

const fontFamily = ({ theme, weight }) => {
  const { font } = theme.typography;
  if (!font || typeof font[weight] !== 'string') {
    return null;
  }
  return `font-family: ${font[weight]}`;
};

const Text = styled.Text`
  text-align: ${({ align }) => align};
  color: ${({ theme, color, hue }) => constrain(theme.palette[color], hue)}
  margin: ${({ theme, variant, type }) => rounded(theme.spacing.typography[type][variant])}px 0;
  font-size: ${({ theme, variant, type }) => rounded(theme.typography[type][variant])}px;
  ${fontFamily};
`;

Text.propTypes = {
  align: PropTypes.string,
  hue: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.string,
  weight: PropTypes.string,
  type: PropTypes.string,
};

Text.defaultProps = {
  align: 'left',
  color: 'neutral',
  variant: 'm',
  weight: 'regular',
  type: 'text',
  hue: 600,
};

export default withTheme(Text);
