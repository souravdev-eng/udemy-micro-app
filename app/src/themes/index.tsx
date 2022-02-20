import React from 'react';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const theme = {
  colors: {
    Black: '#1C1D1F',
    Purple: '#A435F0',
    LightGray1: '#F2F3F5',
    Orange: '#F69C08',
    Sky: '#199FA3',
    Blue: '#4435BB',
    LightSky: '#72D8BA',
    LightGrey: '#868e96',
  },
  fonts: {
    Inter_Regular: 'Inter-Regular',
    Inter_Medium: 'Inter-Medium',
    Inter_SemiBold: 'Inter-SemiBold',
    Inter_Bold: 'Inter-Bold',

    Lora_Regular: 'Lora-Regular',
    Lora_Medium: 'Lora-Medium',
    Lora_SemiBold: 'Lora-SemiBold',
    Lora_Bold: 'Lora-Bold',
  },
  fontSizes: {
    h1: 26,
    h2: 22,
    h3: 18,
    h4: 14,
    body: 12,
  },
  WIDTH: width,
  HEIGHT: height,
};
