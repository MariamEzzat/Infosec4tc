import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Platform} from 'react-native';
import styles from './introStyles';
import {Btn, Txt} from '../../common';
import VideoPlayer from 'react-native-video-controls';

import {verticalScale} from '../../utils/dimensions';
import {TxtSize, TxtWeight, Color} from '../../theme/const';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CommonActions,
  StackActions,
  useIsFocused,
} from '@react-navigation/native';

const Intro = ({navigation}) => {
  const isFocus = useIsFocused();
  const video =
    'https://firebasestorage.googleapis.com/v0/b/infosec4tc-f40d4.appspot.com/o/Infosec4tc1.mp4?alt=media&token=7883c099-e3a9-40b3-82e7-e4dc748be126';

  const handleOnCompletingIntro = async () => {
    try {
      await AsyncStorage.setItem('intro', 'true');
      if (Platform.OS === 'ios') {
        navigation.navigate('App');
      } else {
        navigation.navigate('Auth', {screen: 'Login'});
       //navigation.navigate('App');
      }
    } catch (e) {}
  };
  return (
    <View style={styles.container}>
      <Txt size={TxtSize.XL} center color={Color.Black} weight={TxtWeight.Bold}>
        Welcome to infoesec4TC
      </Txt>
      <Txt
        size={TxtSize.LG - 2}
        center
        mt={6}
        mb={20}
        mr={20}
        ml={20}
        color={Color.secondary}
        weight={TxtWeight.Semi}>
        InfoSec4TC your free Cyber Security Hub
      </Txt>

      <View style={{height: 300}}>
        {isFocus && (
          <VideoPlayer source={{uri: video}} navigator={navigation} />
        )}
      </View>

      <View style={{marginTop: verticalScale(20)}}>
        <Btn onPress={handleOnCompletingIntro}>Done</Btn>
      </View>
    </View>
  );
};

export default Intro;
