import styled from 'styled-components/native';
import {theme} from '../../themes';

const {colors, fonts} = theme;

export const TextInput = styled.TextInput<{active: boolean}>`
  padding: 4px 0px;
  font-size: 16px;
  color: ${colors.Black};
  font-family: ${fonts.Inter_Regular};
`;

export const TextInputContainer = styled.View<{active: boolean}>`
  border-bottom-width: ${props => (!props.active ? '0.8' : '1.5')}px;
  border-bottom-color: ${colors.Black};
  width: 90%;
  justify-content: center;
  align-self: center;
  margin: 20px 0px;
`;
export const Text = styled.Text`
  font-size: 13px;
  color: ${colors.Black};
  font-family: ${fonts.Inter_Regular};
  font-family: ${fonts.Inter_Regular};
`;
