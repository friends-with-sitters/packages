import styled, { withTheme } from 'styled-components/native';

import { Text } from '../../text';

const Heading = styled(Text)`
  margin-top: 0;
`;

Heading.defaultProps = {
  ...Text.defaultProps,
  color: 'neutral',
  variant: 'xl',
  type: 'headings',
  weight: 'bold',
  hue: 700,
};

export default withTheme(Heading);
