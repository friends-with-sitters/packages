import styled, { withTheme } from 'styled-components/native';

const debug = ({ theme }) => theme.palette.neutral[500];

const View = styled.View`
  background-color: ${debug};
`;

export default withTheme(View);
