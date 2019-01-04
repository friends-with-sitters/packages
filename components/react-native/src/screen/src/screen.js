import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';

const { roundToNearestPixel: rounded } = PixelRatio;

const Screen = styled.View`
  margin: ${({ theme }) => rounded(theme.spacing.gutter)}px;
  flex: ${({ flex }) => flex};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
`;

Screen.propTypes = {
  flex: PropTypes.string,
  direction: PropTypes.string,
  justify: PropTypes.string,
};

Screen.defaultProps = {
  flex: '1',
  direction: 'column',
  justify: 'center',
};

export default withTheme(Screen);
