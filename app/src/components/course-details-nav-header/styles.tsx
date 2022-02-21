import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../themes';

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
  align-items: center;
`;

export const Icon = styled(Icons)`
  color: ${theme.colors.Black};
`;
