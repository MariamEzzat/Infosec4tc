import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import News from '../../screens/News/news';
import Notifications from '../../screens/Notifications';


const NewStack = createStackNavigator();

function NewsStack() {
  return (

    <NewStack.Navigator>
      <NewStack.Screen name="Notifications" component={Notifications} options={{headerShown: false}}  />
      <NewStack.Screen name="News" component={News} options={{headerTitle: ''}} />
    </NewStack.Navigator>


  );
}




export default NewsStack;
