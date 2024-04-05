import {Dimensions} from 'react-native';

export const Color = {
  Background: '#fdfdfd',
  PlaceholderSecondary: '#ecebeb',
  Transparent: 'transparent',
  Black: '#163f59',
  Tamarillo: '#921114',
  White : 'white',
  lightGrey   : '#fefcfb',
  secondary: '#919395',
};

export const iPhoneSize = {
  X: {
    height: 812, // screen height
    width: 375,
  },
  XsMax: {
    height: 896,
    width: 414,
  },
};

export const NAV_BAR_HEIGHT = 44;

export const Radius = {
  XL: 20,
  LG: 14,
  MD: 8,
  SM: 5,
};

export const Space = {
  XL: 30,
  LG: 20,
  MD: 15,
  SM: 10,
  XS: 5,
};

export const SCREEN = Dimensions.get('screen');

export const ImageSize = {
  Large: iPhoneSize.XsMax.width * 3,
  Medium: iPhoneSize.XsMax.width * 2,
};

export const TxtSize = {
  XXS: 8.5,
  XS: 10.5,
  SM: 13.5,
  MD: 15,
  LG: 18,
  XL: 24,
  XXL: 32,
};

export const Size = {
  SM: 26,
  MD: 36,
  LG: 45,
};

export const TxtWeight = {
  Bold: 'bold',
  Semi: '600',
  Light: '300',
  Medium: '500',
  Regular: '400',
};
