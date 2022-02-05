import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../themes';

const {colors, fonts} = theme;

const Button = () => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Text>Create account</Text>
    </TouchableOpacity>
  );
};

export default Button;

const TouchableOpacity = styled.TouchableOpacity`
  width: 85%;
  background-color: ${colors.Black};
  height: 48px;
  margin: 10px 0px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: ${colors.LightGray};
  font-size: 17px;
  font-weight: bold;
  font-family: ${fonts.Inter_Bold};
`;