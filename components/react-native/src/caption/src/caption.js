import styled, { withTheme } from 'styled-components/native';

import { Text } from '../../text';

const Caption = styled(Text)`
  margin-top: 0;
  margin-right: 12%;
`;

Caption.defaultProps = {
  ...Text.defaultProps,
  color: 'neutral',
  variant: 'xl',
  type: 'captions',
  weight: 'medium',
  hue: 400,
};

export default withTheme(Caption);
