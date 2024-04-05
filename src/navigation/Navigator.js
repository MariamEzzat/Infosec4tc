import * as React from 'react';
import { SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabNavigator from './homeTab/HomeTab';
import AuthNavigator from './authentication/authenticationStack'
import { Splash } from '../screens'
import News from '../screens/News/news';
import {Settings} from 'react-native-fbsdk-next';
import videodetails from '../screens/video/videodetails';
import mainvideo from '../screens/video/mainvideo';
import ContactUs from '../screens/ContactUs/ContactUs';

if(Platform.OS === 'ios'){
    Settings.initializeSDK();
  }
function Navigator() {
  const AuthStack = createStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthStack.Navigator
          headerMode={'none'}
          initialRouteName={'Splash'}>
          <AuthStack.Screen name={'Splash'} component={Splash} />
          <AuthStack.Screen name={'App'} component={HomeTabNavigator} />
          <AuthStack.Screen name={'Auth'} component={AuthNavigator} />
          <AuthStack.Screen name={'News'} component={News} />
          <AuthStack.Screen name={'videodetails'} component={videodetails} />
          <AuthStack.Screen name={'mainvideo'} component={mainvideo} />
          <AuthStack.Screen name={'ContactUs'} component={ContactUs} />
        </AuthStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Navigator;
