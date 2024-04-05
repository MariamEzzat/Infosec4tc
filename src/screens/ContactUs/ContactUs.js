import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Image , Text  , ScrollView , Linking} from 'react-native';
import {Color, TxtWeight, TxtSize} from '../../theme/const';
import {Txt} from '../../common';
import Icon from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import {SocialIcon} from 'react-native-elements';
import {infosec4tclogo} from '../../images';
import { color } from 'react-native-reanimated';


const ContactUs = () => {

  const handleLogOut = () => auth().signOut();

  return (
    <ScrollView style={{flex: 1, backgroundColor: Color.lightGrey}}>
      <View style={styles.header}>
        <View style={{flex: 5}} />

        <View style={styles.heading}>
        <Image source={infosec4tclogo}  />
        <Txt weight={TxtWeight.Bold} size={TxtSize.XL} Color='#6f6f6f'>
              InfoSec<Txt Color='#e04451'>4TC</Txt>{' '}
          </Txt>

        </View>
     
        <View style={{flex: 1, alignItems: 'flex-end'}}>
        {auth().currentUser && (
            <TouchableOpacity onPress={handleLogOut} style={styles.logoutBtn}>
              <Icon name={'log-out'} size={20} Color={Color.Tamarillo} />
            </TouchableOpacity>
          )}
        </View>
      </View>


      <View style={{ flex: 1, flexDirection: 'column' }}>
	 

      <View style={{ flexDirection: 'column' , marginTop : 35}}>

      <Text  style={{ marginTop : 20  , Color: Color.black , fontWeight: 'bold' , fontSize:20 , marginLeft: 15}}>General Inquiry</Text>
       <View style={{ flexDirection: 'row' }}>              
      <SocialIcon style={{marginLeft: 15 ,  marginTop: 20}}  type="envelope" />
      <Text  style={{ marginTop : 35  ,textAlign: 'center' , Color: Color.black ,fontSize:15 }}>infosec4tc@infosec4tc.com</Text>
      </View>


   </View>


</View>

   <View style={{ flex: 1, flexDirection: 'row'  , justifyContent: 'center' , marginTop: 20}}>
	 
   <View style={{ flexDirection: 'column' }}>
   <SocialIcon type="facebook"    onPress={() => {Linking.openURL('https://www.facebook.com/infosec4tc/')}}  />
   <Text style={{ textAlign: 'center' }}>Facebook</Text>
   </View>


   <View style={{ flexDirection: 'column' }}>
   <SocialIcon type="twitter"   onPress={() => {Linking.openURL('https://twitter.com/infosec4tc')}} />
   <Text style={{ textAlign: 'center' }}>Twitter</Text>
   </View>

   <View style={{ flexDirection: 'column' }}>
   <SocialIcon type="youtube"   onPress={() => {Linking.openURL('https://www.youtube.com/infosec4tc')}} />
   <Text style={{ textAlign: 'center' }}>Youtube</Text>
   </View>

   <View style={{ flexDirection: 'column' }}>
   <SocialIcon type="whatsapp"   onPress={() => {Linking.openURL('https://wa.me/971501254773')}} />
   <Text style={{ textAlign: 'center' }}>Whatsapp</Text>
   </View>

   <View style={{ flexDirection: 'column' }}>
   <SocialIcon type="instagram"   onPress={() => {Linking.openURL('https://www.instagram.com/infosec4tc')}} />
   <Text style={{ textAlign: 'center' }}>Instagram</Text>
   </View>




</View>


    </ScrollView>
  );
};

export default ContactUs;

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
