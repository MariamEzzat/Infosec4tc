import React, {useState} from 'react';
import {Text, StyleSheet, Animated} from 'react-native';
import {Color} from '../../theme/const';

function Txt({
  size,
  weight,
  color,
  center,
  mt,
  mr,
  mb,
  ml,
  lh,
  style,
  ...restProps
}) {
  const allStyles = [
    styles.default,
    style,
    !!color && {color},
    !!weight && {fontWeight :weight },
    !!size && {fontSize: size},
    !!center && {textAlign: 'center'},
    !!mt && {marginTop: mt},
    !!mr && {marginRight: mr},
    !!mb && {marginBottom: mb},
    !!ml && {marginLeft: ml},
  ];
  return <Text style={allStyles} {...restProps} />;
}

export default Txt;

const styles = StyleSheet.create({
  default: {
    color: Color.Black,
  },
});
