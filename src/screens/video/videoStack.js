import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import videodetails from '../../screens/video/videodetails';
import mainvideo from '../../screens/video/mainvideo';


const videostack = createStackNavigator();

function videoStack() {
  return (

    <videostack.Navigator>
      <videostack.Screen name="Courses" component={mainvideo} options={{headerShown: false}}  />
      <videostack.Screen name="videodetails" component={videodetails} options={{headerTitle: ''}} />
    </videostack.Navigator>


  );
}




export default videoStack;
