import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity , Image , Text} from 'react-native';
import {Space, Color, TxtWeight, TxtSize} from '../../theme/const';
import YoutubePlayer from 'react-native-youtube-iframe';
import {FlatList} from 'react-native-gesture-handler';
import {Txt} from '../../common';
//import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth'
import { infosec4tclogo , videoyoutube } from '../../images';

const playList = [
  {
    name: 'Cyber Security',
    playlist: 'WTaoaush23o',
  },
  {
    name: 'Information Security Career Step by Step Guide',
    playlist: 'PLC8D09i9KGjJYLnoeZ7VCj3jR5PAPIbuf',
  },
  {
    name: 'ISACA CISM Certification',
    playlist: 'PLC8D09i9KGjLA1O1VChloSG1kTsjm0CL3',
  },
  {
    name: 'ISACA CISA Certification',
    playlist: 'PLC8D09i9KGjLLf02TNKJdShmO-UtOGNFG',
  },
  {
    name: 'Hacking Using Kali Linux from A to Z',
    playlist: 'PLC8D09i9KGjL07_Cl4UTpvLVMU5imdyNf',
  },
  {
    name: 'CEH v.10 Certification',
    playlist: 'PLC8D09i9KGjL9OjeH-ejbsNZvA9rVF2-d',
  },
  {
    name: 'Ethical Hacking from scratch to advance technique',
    playlist: 'PLC8D09i9KGjJp-LFjWozatQkJZ27s_IcJ',
  },
  {
    name: 'Crash CISSP in 4 hours course',
    playlist: 'PLC8D09i9KGjKUKg4hbgDPYLk8bvv5xSTW',
  },
  {
    name: 'SQL injection crash course',
    playlist: 'PLC8D09i9KGjL07_Cl4UTpvLVMU5imdyNf',
  },
  {
    name: 'SQL injection crash course (1)',
    playlist: 'PLC8D09i9KGjL9OjeH-ejbsNZvA9rVF2-d',
  },
  {
    name: 'The art of exploitation full course',
    playlist: 'PLC8D09i9KGjL5mr5SFrHY_UswDURDzlCX',
  },
  {
    name: 'Hacking from scratch course',
    playlist: 'PLC8D09i9KGjLRLb3Td34_T5GULwj0wGwl',
  },
];
const VideoTab = ({route, navigation}) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  let videolink = route.params?.link;

  const handleLogOut = () => auth().signOut();

  return (
    <View
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
      {videolink ? (
        <View style={{}}>
          <YoutubePlayer height={1750}  videoId={videolink} />
        </View>
      ) : (
        <FlatList
           data={playList} horizontal={true}
          renderItem={({item, index}) => (
            
            <View style={{marginBottom:50}}>
              <View style={{flexDirection:'row' , left:28 }}> 
              
              <Txt
                weight={TxtWeight.Bold}
                color={Color.Tamarillo}
                mb={12}
                ml={6}
                mr={6}
                size={TxtSize.XL - 4}>
                {item.name}
              </Txt>
               </View>
     
               <View style={styles.container}>
               <YoutubePlayer
                key={index}
                height={650}
                playList={item.playlist}
               
              />
            </View>

          
          
            </View>
          )}
        />
      )}
    </View>
  );
};

export default VideoTab;

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
    borderRadius: 0,
    overflow:'hidden',
    width: 350, 
    height:195,
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
