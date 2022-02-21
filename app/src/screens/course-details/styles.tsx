import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../themes';

export const Icon = styled(Icons)`
  color: ${theme.colors.Black};
`;

export const ImageContainer = styled.View`
  width: ${theme.WIDTH / 1.2}px;
  /* aspect-ratio: ${16 / 9}; */
  border-color: #fff;
  align-self: center;
`;

export const Image = styled.Image`
  width: '100%';
  height: '100%';
`;
