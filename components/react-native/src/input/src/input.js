import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';

const { roundToNearestPixel: rounded } = PixelRatio;

const constrain = hue => Math.max(200, Math.min(hue, 800));

const readable = (...args) => tinycolor.mostReadable(...args).toString('rgb');

const contrast = ({ theme, color, hue }) => {
  const {
    [color]: { [hue]: text, ...hues },
  } = theme.palette;
  const contrasts = Object.keys(hues).map(h => hues[h].toString());
  return readable(text.toString(), contrasts);
};

const fontFamily = ({ theme, weight }) => {
  const { font } = theme.typography;
  if (!font || typeof font[weight] !== 'string') {
    return null;
  }
  return `font-family: ${font[weight]}`;
};

const Input = styled.TextInput`
  font-weight: 400;
  color: ${contrast}
  border-radius: ${rounded(3)}px;
  font-size: ${({ theme, variant }) => rounded(theme.typography.text[variant])}px;
  margin: ${({ theme }) => rounded(theme.spacing.units[4])}px 0;
  padding: ${({ theme }) => rounded(theme.spacing.units[1])}px ${({ theme }) =>
  rounded(theme.spacing.units[2])}px;
  background: ${({ theme, color, hue }) => theme.palette[color][hue]};
  ${fontFamily};
`;

const TextInput = props => {
  const { theme, color, hue } = props;
  return (
    <Input
      placeholderTextColor={theme.palette[color][constrain(hue + 300)]}
      selectionColor={theme.palette[color][constrain(hue + 300)]}
      underlineColorAndroid={theme.palette.clear[constrain(hue + 200)]}
      {...props}
    />
  );
};

TextInput.propTypes = {
  theme: PropTypes.shape.isRequired,
  color: PropTypes.string,
  hue: PropTypes.number,
  weight: PropTypes.string,
  variant: PropTypes.string,
};

TextInput.defaultProps = {
  color: 'neutral',
  hue: 300,
  weight: 'regular',
  variant: 'm',
};

export default withTheme(TextInput);
