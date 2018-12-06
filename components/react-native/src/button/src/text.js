import styled from 'styled-components/native';
import { PixelRatio } from 'react-native';

export default styled.Text`
  font-size: ${() => PixelRatio.getPixelSizeForLayoutSize(30)}dp;
`;
