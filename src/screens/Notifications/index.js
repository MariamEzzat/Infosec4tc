import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Color, TxtWeight, TxtSize} from '../../theme/const';
import {Txt} from '../../common';
import Icon from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import NotificationList from '../../common/NotificationList/NotificationList';
import {infosec4tclogo} from '../../images';


const Notifications = ({route}) => {
  const [notifications, setNotifications] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigation = useNavigation();
  const handleLogOut = () => auth().signOut();


  
  let notificationRef = firestore().collection('notifications');

  useEffect(() => {
    getNotifications();
  }, [getNotifications]);

  const getNotifications = async () => {
    let arr = [];

    let data = await notificationRef.get();
    if (data && data.docs && data.docs.length) {
      data.docs.forEach(doc => {
        arr.push(doc.data());
      });
    }

    setNotifications(arr.reverse());
    setRefresh(false);
  };

  const notificationPressed = notification => {
    if (notification.link) {
      switch (notification.type) {
        case 'news':
          navigation.navigate('News', {link: notification.link});
          break;
        case 'video':
          navigation.navigate('Video', {link: notification.link});
          break;
      }
    }
  };

  const onPageRefresh = () => {
    setRefresh(true);
    getNotifications();
  };

  return (
    <View style={{flex: 1, backgroundColor: Color.lightGrey}}>
      <View style={styles.header}>
        <View style={{flex: 5}} />

        <View style={styles.heading}>
        <Image source={infosec4tclogo}  />
        <Txt weight={TxtWeight.Bold} size={TxtSize.XL} color='#6f6f6f'>
              InfoSec<Txt color='#e04451'>4TC</Txt>{' '}
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

   


      <NotificationList
        data={notifications}
        onNotificationPressed={notificationPressed}
        onPageRefresh={onPageRefresh}
        refresh={refresh}
      />




    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  logoutBtn: {
    height: 40,
    width: 40,
    backgroundColor: Color.White,
    borderRadius: 125,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {flex: 10, justifyContent: 'flex-start', alignItems: 'flex-start',flexDirection: 'row' , right:20,top:20},
});
