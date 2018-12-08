import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';

const isDisabled = ({ theme, disabled }) => {
  if (disabled) {
    return `
      background-color: ${theme.palette.neutral[200]};
    `;
  }
  return null;
};

const View = styled.View`
  align-items: center;
  border-radius: ${PixelRatio.roundToNearestPixel(3)}px;
  margin: ${PixelRatio.roundToNearestPixel(20)}px ${PixelRatio.roundToNearestPixel(10)}px;
  padding: ${PixelRatio.roundToNearestPixel(8)}px ${PixelRatio.roundToNearestPixel(10)}px;
  background-color: ${({ theme, background, hue }) => theme.palette[background][hue]};
  ${isDisabled}
`;

export default withTheme(View);
