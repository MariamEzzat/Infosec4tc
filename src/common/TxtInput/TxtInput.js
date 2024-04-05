import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import {Space, Color, TxtSize, TxtWeight} from '../../theme/const';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Input = ({
  icon,
  label,
  onChange,
  style,
  input,
  meta,
  placeholder,
  ...inputProps
}) => {
  const [isFocuses, setIsFocuses] = useState(false);
  return (
    <View
      style={[
        styles.inputContainer,
        isFocuses && {borderColor: Color.Tamarillo},
      ]}>
      {icon && (
        <Icon
          name={icon}
          style={styles.inputIcon}
          color={isFocuses ? Color.Tamarillo : Color.secondary}
          size={22}
        />
      )}

      <TextInput
        placeholderTextColor={isFocuses ? Color.Tamarillo : Color.secondary}
        style={[styles.input, isFocuses && {color: Color.Tamarillo}]}
        onFocus={() => setIsFocuses(true)}
        onBlur={() => setIsFocuses(false)}
        placeholder={placeholder}
        {...inputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Color.PlaceholderSecondary,
    marginVertical: Space.SM - 5,
    minHeight: 60,
    paddingLeft: 6,
    backgroundColor: Color.White,
    borderRadius: 125,
    marginHorizontal: Space.MD,
  },
  inputWrapper: {
    flexDirection: 'row',
    height: 50,
    marginTop: -7,
    justifyContent: 'flex-start',
  },
  input: {
    flex: 1,
    fontSize: TxtSize.LG,
    color: Color.Black,
    fontWeight: TxtWeight.Semi,
  },
  inputIcon: {
    paddingHorizontal: Space.SM,
  },
});
