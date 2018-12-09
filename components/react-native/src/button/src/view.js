import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';

const { roundToNearestPixel: rounded } = PixelRatio;

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
  margin: ${({ theme }) => rounded(theme.spacing.units[3])}px 0;
  padding: ${({ theme }) => rounded(theme.spacing.units[2])}px
    ${({ theme }) => rounded(theme.spacing.units[2])}px;
  border-radius: ${rounded(3)}px;
  background-color: ${({ theme, background, hue }) => theme.palette[background][hue]};
  ${isDisabled}
`;

export default withTheme(View);
