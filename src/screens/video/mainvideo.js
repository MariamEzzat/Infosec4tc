import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity , Image , ScrollView , Text} from 'react-native';
import {Space, Color, TxtWeight, TxtSize} from '../../theme/const';
import YoutubePlayer from 'react-native-youtube-iframe';
import {FlatList} from 'react-native-gesture-handler';
import {Txt} from '../../common';
//import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth'
import { infosec4tclogo , videoyoutube, CISM1 , CISM2 , CISM3  , CISA1 , CISA2 , ISMS1 , ISMS2 , ART1 , ART2 , SQL1 , SQL2 , SQL3 , SQL4 , SQL5 , SQL6, CEH1 , CEH2 , CEH3 , CEH4, CEH5, CEH6,CEH7 , CEH8 , CEH9 , CEH10 , CEH11 ,CEH12 ,CEH13, CISSP1, CISSP2 , career}  from '../../images';
import { color } from 'react-native-reanimated';
import HomeTabNavigator from '../../navigation/homeTab/HomeTab'


const ISMS = [
  {
    name: 'Learn ISMS implementation/ ISO 27001 From Scratch Lecture 1',
    playlist: 'aaIX0DOyRm8',
    image:ISMS1 ,
  },
  {
    name: 'Learn ISMS implementation/ ISO 27001 From Scratch Lecture 3',
    playlist: 'WTaoaush23o',
    image:ISMS2,
  },

];

const CISM = [
  {
    name: 'ISACA CISM Certification',
    VideoID: 'mG6_Ma7jmKg',
    image:CISM1 ,
  },
  {
    name: 'Get CISM Certified',
    VideoID: 'Q3OTHIsi4D0',
    image:CISM2 ,
  },
  {
    name: 'Certified Information Security Manager - CISM',
    VideoID: 'ZUzOaKqlaRg',
    image:CISM3,
  },

];

const CISA = [
  {
    name: 'ISACA CISA Certification',
    VideoID: 'J_DlxX0e4XI',
    image:CISA1 ,
  },
  {
    name: 'Get CISA Certified',
    VideoID: 'uSjsuul6M_w',
    image:CISA2 ,
  },
];


const ART = [
  {
    name: 'Free Course | The Art Of Exploitation',
    VideoID: 'JCSGDwyfRDI',
    image:ART1 ,
  },
  {
    name: 'Learn Ethical Hacking in 3 Hours | The Art of Exploitation',
    VideoID: 'iGn-kXFN__E',
    image:ART2 ,
  },
];


const SQL= [
  {
    name: 'SQL Injection Crash Course - Lecture 1',
    VideoID: 'RqGHDz21ZcU',
    image:SQL1 ,
  },
  {
    name: 'SQL Injection Crash Course - Lecture 2',
    VideoID: 'Cm8axGd1-0M',
    image:SQL2 ,
  },
  {
    name: 'SQL Injection Crash Course - Lecture 3',
    VideoID: 'T4ZrGbXHf4c',
    image:SQL3,
  },
  {
    name: 'SQL Injection Crash Course - Lecture 4',
    VideoID: 'emKTyuMVCBA',
    image:SQL4 ,
  },
  {
    name: 'SQL Injection Crash Course - Lecture 5',
    VideoID: '0g5Xhbf7sx4',
    image:SQL5 ,
  },
  {
    name: 'SQL Injection Crash Course - Lecture 6',
    VideoID: 'yrM24bvO5l4',
    image:SQL6,
  },
];


const CEH= [
  {
    name: 'Ethical Hacking From Scratch - Lecture 1',
    VideoID: 'b0JqdjmYlOU',
    image:CEH1 ,
  },
  {
    name: 'Ethical Hacking From Scratch - Lecture 2',
    VideoID: '-F2Qvf064SY',
    image:CEH2 ,
  },
  {
    name: 'Ethical Hacking From Scratch - Lecture 3',
    VideoID: 'hcsAdLe3P8E',
    image:CEH3,
  },
  {
    name: 'Ethical Hacking From Scratch - Lecture 4',
    VideoID: '51crAFyypZ8',
    image:CEH4 ,
  },
  {
    name: 'Ethical Hacking From Scratch - Lecture 5',
    VideoID: '5NS3YwSj4A4',
    image:CEH5 ,
  },
  {
    name: 'Ethical Hacking From Scratch - Lecture 6',
    VideoID: '-x_qJK5gWRU',
    image:CEH6,
  },
  {
    name: 'Ethical Hacking From Scratch - Lecture 7',
    VideoID: 'UvfrVH8CEss',
    image:CEH7 ,
  },
  {
    name: 'Ethical Hacking From Scratch - Lecture 8',
    VideoID: 'BrirwEnCKFY',
    image:CEH8 ,
  },
  {
    name: 'Ethical Hacking From Scratch - Lecture 9',
    VideoID: '7NdCZ7NNsF0',
    image:CEH9,
  },
  {
    name: 'Ethical Hacking From Scratch - Lecture 10',
    VideoID: 'Ym7B8xxkRnk',
    image:CEH10 ,
  },
  {
    name: 'Ethical Hacking From Scratch - Lecture 11',
    VideoID: 'BPrmbzs2myw',
    image:CEH11 ,
  },
  {
    name: 'Ethical Hacking From Scratch - Lecture 12',
    VideoID: 'oD9zt0l-AcM',
    image:CEH12,
  },
  {
    name: 'Ethical Hacking From Scratch - Lecture 13',
    VideoID: 'qQOG0blX8AI',
    image:CEH13,
  },
];


const CISSP = [
  {
    name: 'Crash CISSP in 4 Hours',
    VideoID: 'S19IefE0CB0',
    image:CISSP1 ,
  },
  {
    name: 'How to pass CISSP exam in 6 weeks',
    VideoID: 'GPkZSiv0MGk',
    image:CISSP2 ,
  },
];


const CAREER = [
  {
    name: '1. Information Security Career Step by Step Guide',
    VideoID: 'Qgr0aTNU9I4',
    image:career ,
  },
  {
    name: '2. Information Security Career Step by Step Guide',
    VideoID: 'CuPRnfcDx8A',
    image:career ,
  },
  {
    name: '3. Information Security Career Step by Step Guide',
    VideoID: 'KJDyTUZ3jqg',
    image:career ,
  },
];



const mainvideo = ({route, navigation}) => {

let videolink = route.params?.link;

const handleLogOut = () => auth().signOut();
return (
  <ScrollView
    style={{flex: 1, paddingTop: 12, backgroundColor: Color.lightGrey}}>
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

    <Txt
              weight={TxtWeight.Bold}
              color={Color.Tamarillo}
              mb={12}
              ml={6}
              mr={6}
              size={TxtSize.XL - 4}>
            CISA - Certified Information Systems Auditor
            </Txt>


    <FlatList
         data={CISA} horizontal={true}
        renderItem={({item, index}) => (


    <TouchableOpacity onPress={()=>{ navigation.navigate('videodetails', {videolink: item.VideoID ,videoname:item.name }); }}>
        <ScrollView >
          <Image source={item.image}/>



<Text numberOfLines={3} style={{ width: 200  , fontWeight: "bold" , color: '#4E4F50'}}>
{item.name}
{"\n"}
      {"\n"}
</Text>
        </ScrollView>
      </TouchableOpacity>

)}

ItemSeparatorComponent={() => {
  return (
      <View
          style={{
              height: "50%",
              width: 20,
          }} />
  );
}}
/>


<Txt
              weight={TxtWeight.Bold}
              color={Color.Tamarillo}
              mb={12}
              ml={6}
              mr={6}
              size={TxtSize.XL - 4}>
            CISM - Certified Information Security Manager
            </Txt>

<FlatList
         data={CISM} horizontal={true}

        renderItem={({item, index}) => (


          <TouchableOpacity onPress={()=>{ navigation.navigate('videodetails', {videolink: item.VideoID ,videoname:item.name }); }}>
        <ScrollView >
          <Image source={item.image}/>
          <Text numberOfLines={3} style={{ width: 200 , fontWeight: "bold",  color: '#4E4F50'}}>
{item.name}
{"\n"}
      {"\n"}
</Text>

        </ScrollView>
      </TouchableOpacity>

)}

ItemSeparatorComponent={() => {
  return (
      <View
          style={{
              height: "50%",
              width: 20,
          }} />
  );
}}
/>



<Txt
              weight={TxtWeight.Bold}
              color={Color.Tamarillo}
              mb={12}
              ml={6}
              mr={6}
              size={TxtSize.XL - 4}>
           Learn ISMS implementation/ ISO 27001 From Scratch
            </Txt>

<FlatList
         data={ISMS} horizontal={true}

        renderItem={({item, index}) => (


          <TouchableOpacity onPress={()=>{ navigation.navigate('videodetails', {videolink: item.VideoID ,videoname:item.name }); }}>
        <ScrollView >
          <Image source={item.image}/>
          <Text numberOfLines={4} style={{ width: 200  , fontWeight: "bold" , color: '#4E4F50'}}>
{item.name}
{"\n"}
{"\n"}

</Text>

        </ScrollView>
      </TouchableOpacity>

)}

ItemSeparatorComponent={() => {
  return (
      <View
          style={{
              height: "50%",
              width: 20,
          }} />
  );
}}
/>





<Txt
              weight={TxtWeight.Bold}
              color={Color.Tamarillo}
              mb={12}
              ml={6}
              mr={6}
              size={TxtSize.XL - 4}>
          The Art Of Exploitation
            </Txt>

<FlatList
         data={ART} horizontal={true}

        renderItem={({item, index}) => (


          <TouchableOpacity onPress={()=>{ navigation.navigate('videodetails', {videolink: item.VideoID ,videoname:item.name }); }}>
        <ScrollView >
          <Image source={item.image}/>
          <Text numberOfLines={4} style={{ width: 200  , fontWeight: "bold" , color: '#4E4F50'}}>
{item.name}
{"\n"}
      {"\n"}
      {"\n"}
</Text>

        </ScrollView>
      </TouchableOpacity>

)}

ItemSeparatorComponent={() => {
  return (
      <View
          style={{
              height: "50%",
              width: 20,
          }} />
  );
}}
/>


<Txt
              weight={TxtWeight.Bold}
              color={Color.Tamarillo}
              mb={12}
              ml={6}
              mr={6}
              size={TxtSize.XL - 4}>
          SQL Injection Full Course 
                        </Txt>

<FlatList
         data={SQL} horizontal={true}

        renderItem={({item, index}) => (


          <TouchableOpacity onPress={()=>{ navigation.navigate('videodetails', {videolink: item.VideoID ,videoname:item.name }); }}>
        <ScrollView >
          <Image source={item.image}/>
          <Text numberOfLines={4} style={{ width: 200  , fontWeight: "bold" , color: '#4E4F50'}}>
{item.name}
{"\n"}
      {"\n"}
      {"\n"}
</Text>

        </ScrollView>
      </TouchableOpacity>

)}

ItemSeparatorComponent={() => {
  return (
      <View
          style={{
              height: "50%",
              width: 20,
          }} />
  );
}}
/>





<Txt
              weight={TxtWeight.Bold}
              color={Color.Tamarillo}
              mb={12}
              ml={6}
              mr={6}
              size={TxtSize.XL - 4}>
         Ethical Hacking From Scratch 
                        </Txt>

<FlatList
         data={CEH} horizontal={true}

        renderItem={({item, index}) => (


          <TouchableOpacity onPress={()=>{ navigation.navigate('videodetails', {videolink: item.VideoID ,videoname:item.name }); }}>
        <ScrollView >
          <Image source={item.image}/>
          <Text numberOfLines={4} style={{ width: 200  , fontWeight: "bold" , color: '#4E4F50'}}>
{item.name}
{"\n"}
      {"\n"}
      {"\n"}
</Text>

        </ScrollView>
      </TouchableOpacity>

)}

ItemSeparatorComponent={() => {
  return (
      <View
          style={{
              height: "50%",
              width: 20,
          }} />
  );
}}
/>



<Txt
              weight={TxtWeight.Bold}
              color={Color.Tamarillo}
              mb={12}
              ml={6}
              mr={6}
              size={TxtSize.XL - 4}>
         CISSP - Certified Information Systems Security Professional
                        </Txt>

<FlatList
         data={CISSP} horizontal={true}

        renderItem={({item, index}) => (


          <TouchableOpacity onPress={()=>{ navigation.navigate('videodetails', {videolink: item.VideoID ,videoname:item.name }); }}>
        <ScrollView >
          <Image source={item.image}/>
          <Text numberOfLines={4} style={{ width: 200  , fontWeight: "bold" , color: '#4E4F50'}}>
{item.name}
{"\n"}
      {"\n"}
      {"\n"}
</Text>

        </ScrollView>
      </TouchableOpacity>

)}

ItemSeparatorComponent={() => {
  return (
      <View
          style={{
              height: "50%",
              width: 20,
          }} />
  );
}}
/>


<Txt
              weight={TxtWeight.Bold}
              color={Color.Tamarillo}
              mb={12}
              ml={6}
              mr={6}
              size={TxtSize.XL - 4}>
         Information Security Career Step by Step Guide
                        </Txt>

<FlatList
         data={CAREER} horizontal={true}

        renderItem={({item, index}) => (

          <TouchableOpacity onPress={()=>{ navigation.navigate('videodetails', {videolink: item.VideoID ,videoname:item.name }); }}>
        <ScrollView >
          <Image source={item.image}/>
          <Text numberOfLines={4} style={{ width: 200  , fontWeight: "bold" , color: '#4E4F50'}}>
{item.name}
{"\n"}
      {"\n"}
      {"\n"}
</Text>

        </ScrollView>
      </TouchableOpacity>

)}

ItemSeparatorComponent={() => {
  return (
      <View
          style={{
              height: "50%",
              width: 20,
          }} />
  );
}}
/>
  </ScrollView>
);
};

export default mainvideo;

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
