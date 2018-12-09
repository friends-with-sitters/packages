import styled, { withTheme } from 'styled-components/native';
import { PixelRatio } from 'react-native';
import PropTypes from 'prop-types';

const { roundToNearestPixel: rounded } = PixelRatio;

const marginUnitMappings = {
  xl: 5,
  l: 3,
  m: 0,
};

const Heading = styled.Text`
  color: ${({ theme }) => theme.palette.neutral[400]};
  font-size: ${({ theme, variant }) => rounded(theme.typography.captions[variant])}px;
  margin-top: 0;
  margin-right: 12%;
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
