import * as React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import News from '../../screens/News/news';
import videodetails from '../../screens/video/videodetails';
import Notifications from '../../screens/Notifications';
import ContactUs from '../../screens/ContactUs/ContactUs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import mainvideo from '../../screens/video/mainvideo';
import Search from '../../screens/Search/Search'
import videoStack from '../../screens/video/videoStack';
import NewsStack from '../../screens/News/NewsStack'; 
const Stack = createStackNavigator();

const HomeTab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <HomeTab.Navigator
      initialRouteName="Courses"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'ContactUs') {
            iconName = focused ? 'mail-open-sharp' : 'mail-open-outline';
          } else if (route.name === 'Courses') {
            iconName = focused ? 'book-sharp' : 'book-outline';
          }else if (route.name === 'Search') {
            iconName = focused ? 'search-circle' : 'search-circle-outline';
          }else if (route.name === 'Notifications') {
            iconName = focused? 'notifications-sharp' : 'notifications-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { position: 'absolute' },
      })}
      tabBarOptions={{
        activeTintColor: '#F02a32',
        inactiveTintColor: '#2c2c2c',
        style: {
          backgroundColor: '#2c2c2c',//color you want to change
          borderWidth: -20,
          flex: 0.08,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderColor: 'lightGrey',
          borderBottomColor :'lightGrey',
          marginBottom: 0,
          
     
        }

      }}>
      <HomeTab.Screen name="Courses" component={videoStack} options={{gestureEnabled: false}} />
      <HomeTab.Screen name="Search" component={Search} />
      <HomeTab.Screen name="Notifications" component={NewsStack} />
      <HomeTab.Screen name="ContactUs" component={ContactUs} />
    </HomeTab.Navigator>
  );
}

export default HomeTabNavigator;
