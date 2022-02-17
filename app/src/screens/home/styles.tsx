import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {theme} from '../../themes';

export const CartIcon = styled(Icon)`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const BannerContainer = styled.View`
  margin-top: 60px;
  opacity: 0.8;
  background: #000;
`;

export const Image = styled.Image`
  height: 200px;
  width: 100%;
`;

export const HeadingText = styled.Text`
  font-family: ${theme.fonts.Lora_Bold};
  font-size: 26px;
  color: ${theme.colors.Black};
`;

export const HeadingTextContainer = styled.View`
  margin: 10px 10px;
`;

export const SubheadingText = styled.Text`
  font-family: ${theme.fonts.Inter_Regular};
  font-size: 14px;
  color: ${theme.colors.LightGrey};
  width: 95%;
  margin: 6px 0px;
`;
