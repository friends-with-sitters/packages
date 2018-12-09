import styled, { withTheme } from 'styled-components/native';
import tinycolor from 'tinycolor2';

import { Text } from '../../text';

const readable = (...args) => tinycolor.mostReadable(...args).toString('rgb');

const contrast = ({ theme, background, hue }) => {
  const {
    [background]: { [hue]: color, ...hues },
  } = theme.palette;
  if (color.opacity > 0) {
    const contrasts = Object.keys(hues).map(h => hues[h].toString());
    const contrasting = readable(color.toString(), contrasts);
    return `color: ${contrasting.toString()}`;
  }
  return null;
};

const ButtonText = styled(Text)`
  ${contrast};
  margin: 0;
`;

ButtonText.defaultProps = {
  ...Text.defaultProps,
  variant: 'm',
};

export default withTheme(ButtonText);
