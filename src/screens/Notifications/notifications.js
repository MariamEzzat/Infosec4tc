import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Space, Color, TxtWeight, TxtSize} from '../../theme/const';
import {Txt} from '../../common';
//import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import { infosec4tclogo } from '../../images';

const Notification = ({route, navigation}) => {
  const handleLogOut = () => auth().signOut();

  return (
    <View
      style={{flex: 1, paddingTop: 12, backgroundColor: Color.lightGrey}}>
      <View style={styles.header}>
        <View style={{flex: 1}} />
        
        <View style={styles.heading}>
        <Image source={infosec4tclogo}  />
        <Txt weight={TxtWeight.Bold} size={TxtSize.XL}>
            InfoSec<Txt color={Color.Tamarillo}>4TC</Txt>{' '}
          </Txt>

        </View>
        
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          {auth().currentUser && (
            <TouchableOpacity onPress={handleLogOut} style={styles.logoutBtn}>
              <Icon name={'log-out'} size={20} color={Color.Tamarillo} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  logoutBtn: {
    height: 40,
    width: 40,
    backgroundColor: Color.White,
    borderRadius: 125,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 70,
    marginBottom: -20,
    flexDirection: 'row',
    width: '100%',
    // position: 'absolute',
    // top: 0,
    // zIndex: 2,
    backgroundColor: Color.lightGrey,
  },
  heading: {flex: 10, justifyContent: 'flex-start', alignItems: 'flex-start',flexDirection: 'row' , right:20,top:20},
});
