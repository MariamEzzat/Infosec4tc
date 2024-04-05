import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Color, TxtSize} from '../../theme/const';
import Txt from '../text/Text';

function NotificationList({
  data,
  onNotificationPressed,
  onPageRefresh,
  refresh,
}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        onRefresh={onPageRefresh}
        refreshing={refresh}
        keyExtractor={item => item.title}
        renderItem={({item, index}) => {
          const notificationPressed = () => onNotificationPressed(item);

          return (
            
            <TouchableOpacity
              activeOpacity={0.7}
              key={`${item}_${index}`}
              onPress={notificationPressed}>
              <View style={styles.notificationContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.notificationIcon}>
                    {item.type === 'news' ? (
                      <Ionicons name={'newspaper'} size={25} color={Color.Tamarillo} />
                    ) : (
                      <Ionicons name={'videocam'} size={25} color={Color.Tamarillo} />
                    )}
                  </View>

                  <View style={{flex: 1}}>
                    <Txt
                      ml={12}
                      weight={'bold'}
                      color={Color.Tamarillo}
                      size={TxtSize.LG - 2}>
                      {item?.title}
                    </Txt>
                    <Txt
                      ml={12}
                      numberOfLines={1}
                      color={Color.White}
                      size={TxtSize.SM}>
                      {item?.link}
                    </Txt>
                  </View>
                </View>

                <Txt ml={4} mt={12} color={Color.White}>
                  {item?.body}
                </Txt>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default NotificationList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: '#FFFAF9',
  },

  notificationContainer: {
    backgroundColor: '#404040',
    marginVertical: 4,
    marginHorizontal: 20,
    elevation: 1,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.05,
  },
  notificationIcon: {
    // width: '20%',
    height: 45,
    width: 45,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 125,
  },
  notifcationBody: {
    width: '60%',
    marginRight: 20,
    paddingLeft: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  notificationRow: {
    paddingVertical: 2,
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Color.Tamarillo,
  },
  forwardIcon: {
    justifyContent: 'center',
  },
  bodyText: {
    color: Color.secondary,
    fontSize: 13,
  },
  linkText: {
    fontSize: 10,
    color: Color.Black,
  },
});
