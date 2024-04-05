import React, {useState , useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, TouchableOpacity, Image , FlatList ,ScrollView  , Text , Button} from 'react-native';
import {Color, TxtWeight, TxtSize} from '../../theme/const';
import {Txt} from '../../common';
import auth from '@react-native-firebase/auth';
import { infosec4tclogo , videoyoutube, CISM1 , CISM2 , CISM3  , CISA1 , CISA2 , ISMS1 , ISMS2 , ART1 , ART2 , SQL1 , SQL2 , SQL3 , SQL4 , SQL5 , SQL6, CEH1 , CEH2 , CEH3 , CEH4, CEH5, CEH6,CEH7 , CEH8 , CEH9 , CEH10 , CEH11 ,CEH12 ,CEH13, CISSP1, CISSP2 , career}  from '../../images';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const Search = ({route}) => {
  
  const Videos = [
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

  const [searchedArray, setSearchedArray] = useState([]);
  const [searchString, setSearchString] = useState("");
  const navigation = useNavigation();
  
  const handleLogOut = () => auth().signOut();

  useEffect(() => {
    if (searchString.length === 0) {
      setSearchedArray([]);
    } else {
      const searchedObjects = [];
      Videos.forEach((video, index) => {
        Object.values(video).every((onlyValues, valIndex) => {
          if (onlyValues.toLowerCase().includes(searchString.toLowerCase())) {
            searchedObjects.push(video);
            return;
          }
        });
      });
      setSearchedArray(searchedObjects);
    } 
  }, [searchString]);

  return (
    <View style={{flex: 1, backgroundColor: Color.lightGrey}}>
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

      <View style={{flexDirection: "row" }}>
<SearchBar
  
    inputStyle={{backgroundColor: 'white'}}
    containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5 , marginTop: 50 , width:350 , marginLeft:20 , marginRight:20}}
    inputContainerStyle={{backgroundColor: 'white'}}
    placeholderTextColor={'#g5g5g5'}
        placeholder="Type Here..."
        onChangeText={(e) => setSearchString(e)}
        value={searchString}
      />

</View>

<FlatList
         data={searchedArray} 
        renderItem={({item, index}) => (


    <TouchableOpacity onPress={()=>{ navigation.navigate('videodetails', {videolink: item.VideoID ,videoname:item.name }); }}>
        <View style={{flexDirection: "row" , marginTop:10 , marginLeft:10 }}>
        <Image style={{height: 80 , width: 80}}   source={item.image}/>
        
        <Text numberOfLines={3} style={{ marginLeft:10, width: 280  , fontWeight: "bold" , color: '#4E4F50' , marginTop: 25 , fontSize: 15}}>

{item.name}
{"\n"}
      {"\n"}
</Text>
          
        </View>
      </TouchableOpacity>

)}


ItemSeparatorComponent={() => {
  return (
      <View
          style={{
              height: 20,
              width: 20,
          }} />
  );
}}
/>


    </View>
  );
};

export default Search;

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
