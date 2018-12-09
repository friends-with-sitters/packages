import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';

const { roundToNearestPixel: rounded } = PixelRatio;

const marginUnitMappings = {
  xl: 6,
  l: 4,
  m: 3,
  s: 1,
};

const Heading = styled.Text`
  color: ${({ theme }) => theme.palette.neutral[700]};
  font-weight: 700;
  font-size: ${({ theme, variant }) => rounded(theme.typography.headings[variant])}px;
  margin-top: 0;
  margin-bottom: ${({ theme, variant }) =>
    rounded(theme.spacing.units[marginUnitMappings[variant]])}px;
`;

Heading.propTypes = {
  variant: PropTypes.string,
};

Heading.defaultProps = {
  variant: 'xl',
};

export default withTheme(Heading);
