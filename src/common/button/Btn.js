import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Color, TxtSize, TxtWeight} from '../../theme/const';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Txt} from '..';
import {scale} from '../../utils/dimensions';

export const Btn = ({
  icon,
  children,
  btnStyle,
  bgColor,
  onPress,
  iconColor,
  txtStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        btnStyle,
        bgColor && {backgroundColor: bgColor},
      ]}
      onPress={onPress}>
      {icon && (
        <Icon
          name={icon}
          style={styles.inputIcon}
          color={iconColor ? iconColor : Color.White}
          size={18}
        />
      )}

      <Txt
        color={Color.White}
        size={TxtSize.LG - 2}
        weight={TxtWeight.Bold}
        style={[txtStyle]}>
        {children}
      </Txt>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    height: 47,
    width: scale(170),
    borderRadius: 125,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.Tamarillo,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  inputIcon: {
    marginRight: 12,
    // position: 'absolute',
    // left: 12,
  },
});
