import styled, { withTheme } from 'styled-components/native';
import tinycolor from 'tinycolor2';

import { Text } from '../../text';

const readable = (...args) => tinycolor.mostReadable(...args).toString('rgb');

const contrast = ({ theme, background, hue }) => {
  const {
    [background]: { [hue]: color, ...hues },
  } = theme.palette;
  const contrasts = Object.keys(hues).map(h => hues[h].toString());
  return readable(color.toString(), contrasts);
};

const ButtonText = styled(Text)`
  color: ${contrast};
  margin: 0;
`;

ButtonText.defaultProps = {
  ...Text.defaultProps,
  variant: 'm',
};

export default withTheme(ButtonText);
