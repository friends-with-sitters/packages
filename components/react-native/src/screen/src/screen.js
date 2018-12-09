import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';

const { roundToNearestPixel: rounded } = PixelRatio;

const Screen = styled.View`
  margin: ${({ theme }) => rounded(theme.spacing.gutter)}px;
  flex: 1;
  flex-direction: column;
`;

Screen.propTypes = {};

Screen.defaultProps = {};

export default withTheme(Screen);
