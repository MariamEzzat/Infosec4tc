import React, {useEffect} from 'react';
import {View, Image, StyleSheet, BackHandler, Platform} from 'react-native';
import {Logo} from '../../images';
import {verticalScale} from '../../utils/dimensions';
import {Color} from '../../theme/const';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

const Splash = ({navigation}) => {
  const notificationRef = firestore().collection('notifications');
  // auth().signOut()
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  async function onAuthStateChanged(user) {
     try {
       if (user) {
         navigation.navigate('App');
       } else {
         let intro = await AsyncStorage.getItem('intro');
         console.log(
          '🚀 ~ file: index.js ~ line 28 ~ onAuthStateChanged ~ intro',
          intro,
         );
         if (intro) {
           if (Platform.OS === 'ios') {
             navigation.navigate('App');
           } else {
            navigation.navigate('App');
            // navigation.navigate('Auth', {screen: 'Login'});
           }
         } else {
           navigation.navigate('Auth', {screen: 'Intro'});
         }
       }
     } catch (e) {
       // saving error
     }
  }

  const isNotificationExist = async ({title, body}) =>
    await notificationRef
      .where('title', '==', title)
      .where('body', '==', body)
      .get();

  const saveNotification = async ({title, body, link, type}) => {
    let checkNotification = isNotificationExist({title, body});

    if ((await checkNotification).empty) {
      await notificationRef.add({
        title,
        body,
        link,
        type,
      });
    }
  };

  useEffect(() => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        '🚀 ~ file: index.js ~ line 43 ~ messaging ~ remoteMessage',
        remoteMessage,
      );
      const {type, link} = remoteMessage?.data || {};
      const {title, body} = remoteMessage?.notification || {};
      console.log('remoteMessage?.notification=>', remoteMessage?.notification);
      saveNotification({type, title, body, link});

      if (remoteMessage?.data?.type == 'news') {
        navigation.navigate('App', {
          screen: 'News',
          params: {link: remoteMessage.data.link},
        });
      }
      if (remoteMessage?.data?.type == 'video') {
        navigation.navigate('App', {
          screen: 'Video',
          params: {link: remoteMessage.data.link},
        });
      }
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          const {type, link} = remoteMessage?.data || {};
          const {title, body} = remoteMessage?.notification || {};
          saveNotification({type, title, body, link});
          if (remoteMessage?.data?.type == 'news') {
            navigation.navigate('App', {
              screen: 'News',
              params: {link: remoteMessage.data.link},
            });
          }
          if (remoteMessage?.data?.type == 'video') {
            navigation.navigate('App', {
              screen: 'Video',
              params: {link: remoteMessage.data.link},
            });
          }
        }
      });

    setTimeout(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      requestUserPermission();
    }, 2500);
  });

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.White,
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: verticalScale(100),
    width: 300,
  },
});

export default Splash;
