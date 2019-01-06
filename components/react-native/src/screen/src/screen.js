import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';

const { roundToNearestPixel: rounded } = PixelRatio;

const Screen = styled.View`
  flex: ${({ flex }) => flex};
  margin: ${({ theme }) => rounded(theme.spacing.gutter)}px;  
  flex-direction: ${({ axis }) => axis === 'vertical' ? 'column' : 'row'};
  justify-content: ${({ halign }) => halign};
  align-items: ${({ valign }) => valign};
`;

Screen.propTypes = {
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  axis: PropTypes.oneOf(['vertical', 'horizontal']),
  halign: PropTypes.string,
  valign: PropTypes.string,
};

Screen.defaultProps = {
  flex: 1,
  axis: 'vertical',
  halign: 'center',
  valign: 'stretch',
};

export default withTheme(Screen);
