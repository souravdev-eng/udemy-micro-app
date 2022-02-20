import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../themes';

export const Container = styled.TouchableOpacity`
  width: ${theme.WIDTH / 1.9}px;

  border-radius: 6px;
  background-color: #fff;
  elevation: 2.2px;
  overflow: hidden;
  margin: 10px 10px;
  padding-bottom: 5px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.Inter_Bold};
  color: ${theme.colors.Black};
  font-size: ${theme.fontSizes.h4};
  margin-top: 5px;
`;
export const AuthorName = styled.Text`
  font-family: ${theme.fonts.Inter_Regular};
  color: ${theme.colors.LightGrey};
  font-size: ${theme.fontSizes.body};
  margin: 2px 0px;
`;
export const Ratings = styled.Text`
  padding-right: 2px;
  font-family: ${theme.fonts.Inter_Bold};
  color: ${theme.colors.Orange};
  font-size: ${theme.fontSizes.body};
`;
export const TotalParches = styled.Text`
  padding-left: 2px;
  font-family: ${theme.fonts.Inter_Regular};
  color: ${theme.colors.LightGrey};
  font-size: ${theme.fontSizes.body};
`;

export const Price = styled.Text`
  font-family: ${theme.fonts.Inter_SemiBold};
  color: ${theme.colors.Black};
  font-size: ${theme.fontSizes.h3};
  margin: 2px 0px;
`;

export const BestsellerTag = styled.View`
  background-color: ${theme.colors.Orange};
  width: 40%;
  padding: 2px 5px;
  align-items: center;
`;
export const HighestTag = styled.View`
  background-color: ${theme.colors.Orange};
  width: 50%;
  padding: 2px 5px;
  align-items: center;
`;

export const TagText = styled.Text`
  font-family: ${theme.fonts.Inter_SemiBold};
  color: ${theme.colors.Black};
  font-size: ${theme.fontSizes.body};
`;
