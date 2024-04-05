import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity , Image , ScrollView , Button , Linking , Text}  from 'react-native';
import {Color, TxtWeight, TxtSize} from '../../theme/const';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Txt} from '../../common';
import Icon from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth'
import { infosec4tclogo ,infosec4tcicon} from '../../images';




const videodetails = ({route, navigation }) => {

  const { videolink, videoname } = route.params;

  const handleLogOut = () => auth().signOut();

    
  return (
    <ScrollView
      style={{flex: 1, paddingTop: 12, backgroundColor: Color.lightGrey}}>

      <View style={{flex: 5}} />

      
      
        <View>

        <Txt
                weight={TxtWeight.Bold}
                color={Color.Tamarillo}
                mb={12}
                ml={6}
                mr={6}
                size={TxtSize.XL - 4}>
       {videoname}
              </Txt>

          <YoutubePlayer  height={250}  videoId={videolink} />

    



  <TouchableOpacity onPress={()=>{ Linking.openURL('https://school.infosec4tc.com/courses'); }}>
        <View style={{flexDirection: "row" , marginTop:15}}>
          <Image source={infosec4tcicon}/>



<Text style={{ marginTop:15, fontWeight: "bold" , color: Color.Tamarillo}}>
For more Courses
</Text>
        </View>
      </TouchableOpacity>


        </View>
     
    </ScrollView>
  );
};

export default videodetails;

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
    marginBottom: 0,
    flexDirection: 'row',
    width: '100%',
    // position: 'absolute',
    // top: 0,
    // zIndex: 2,
    backgroundColor: Color.lightGrey,
   
  },
  container: {
    borderRadius: 30,
    overflow:'hidden',
    width: 350, 
    height:190,
    left:30,
    borderColor:'black',
    backgroundColor:'black',
    

    
    
  },
  notificationIcon: {
    // width: '20%',
    height: 45,
    width: 45,
    backgroundColor: '#FFECE8',
    borderColor: '#ccc',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 125,
    
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: 'black',
  },
  heading: {flex: 10, justifyContent: 'flex-start', alignItems: 'flex-start',flexDirection: 'row' , right:20,top:10 ,bottom:50},

  line:{
  height:10,

  },
});
