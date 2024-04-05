import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/Authentication/Login/LoginScreen';
import SignupScreen from '../../screens/Authentication/Signup/Signup';
import Splash from '../../screens/Splash';
import ForgotPassword from '../../screens/Authentication/ForgotPassword/ForgotPassword';
import Intro from '../../screens/Intro/intro';

const stack = createStackNavigator();

function AuthNavigator() {
  return (
    <stack.Navigator initialRouteName="Intro" headerMode={'none'}>
      <stack.Screen name="Intro" component={Intro} />
      <stack.Screen name="Login" component={LoginScreen} />
      <stack.Screen name="Signup" component={SignupScreen} />
      <stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </stack.Navigator>
  );
}

export default AuthNavigator;
