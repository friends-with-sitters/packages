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

const Input = styled.TextInput`
  font-weight: 400;
  color: ${contrast}
  border-radius: ${rounded(3)}px;
  font-size: ${({ theme, variant }) => rounded(theme.typography.text[variant])}px;
  margin: ${({ theme }) => rounded(theme.spacing.units[4])}px 0;
  padding: ${({ theme }) => rounded(theme.spacing.units[1])}px ${({ theme }) =>
  rounded(theme.spacing.units[2])}px;
  background: ${({ theme, color, hue }) => theme.palette[color][hue]};
`;

const Text = ({ theme, color, hue, ...props }) => (
  <Input
    color={color}
    hue={hue}
    placeholderTextColor={theme.palette[color][constrain(hue + 300)]}
    selectionColor={theme.palette[color][constrain(hue + 300)]}
    underlineColorAndroid={theme.palette.clear[constrain(hue + 200)]}
    {...props}
  />
);

Text.propTypes = {
  color: PropTypes.string,
  hue: PropTypes.number,
  variant: PropTypes.string,
};

Text.defaultProps = {
  color: 'neutral',
  hue: 300,
  variant: 'm',
};

export default withTheme(Text);
