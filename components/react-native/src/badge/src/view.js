import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';

const { roundToNearestPixel: rounded } = PixelRatio;

const View = styled.View`
  padding: ${() => rounded(5)}px ${({ theme }) => rounded(theme.spacing.units[2])}px;
  background: ${({ theme, background, hue }) => theme.palette[background][hue]};
  border-radius: 99px;
`;

View.propTypes = {
  background: PropTypes.string,
  hue: PropTypes.number,
};

View.defaultProps = {
  background: 'neutral',
  hue: 700,
};

export default withTheme(View);
