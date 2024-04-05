import React, {useState, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView, Platform , Image} from 'react-native';
import {Space, Color, TxtWeight, TxtSize} from '../../theme/const';
import {Txt} from '../../common';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { infosec4tclogo } from '../../images';


const News = ({navigation, route}) => {
  const [canGoBack, setCanGoBack] = useState(true);
  const [canGoForward, setCanGoForward] = useState(false);
  const [webLink, setWebLink] = useState('https://www.infosec4tc.com/blog/');
  const webviewRef = useRef();

  const backButtonHandler = () => webviewRef.current?.goBack();

  const link = firestore()
    .collection('news')
    .doc('news')
    .onSnapshot(documentSnapshot => {
      setWebLink(documentSnapshot.data().link);
    });

  const forwardButtonHandler = () => webviewRef.current?.goForward();
  let webViewUrl = route.params?.link ? route.params?.link : webLink;

  const handleLogOut = () => auth().signOut();

  return (
    <View style={{flex: 1, backgroundColor: Color.lightGrey}}>


      {webViewUrl === null ? (
        <View style={{flex: 1}}>
          <ScrollView>
            <View>
              <Txt
                ml={10}
                style={{fontWeight: 'bold'}}
                size={20}
                mr={10}
                color={Color.Tamarillo}>
                {'Center For Internet Security'}
              </Txt>
            </View>

            <View>
              <Txt
                ml={10}
                mt={10}
                mr={10}
                style={{fontWeight: 'bold'}}
                size={16}
                color={Color.Black}>
                {'Why We Do What We Do'}
              </Txt>
            </View>

            <View>
              <Txt ml={10} mt={10} mr={10} size={13} style={{lineHeight: 18}}>
                {
                  'The CIS Controls take the background and knowledge of cybersecurity experts literally around the world and help focus efforts on things that are of most value. Directly impacting the adversaries and challenges we face today on our networks.'
                }
              </Txt>
            </View>

            <View>
              <Txt ml={10} mt={10} mr={10} size={13} style={{lineHeight: 18}}>
                {
                  'Without this resource, the hardening of our devices would have taken a lot longer and required many meetings between IT and Security to debate which configuration settings to change and the impact they could have. The CIS Benchmarks provided the necessary information to alleviate many of the fears IT may have had with changing specific settings.'
                }
              </Txt>
            </View>

            <View>
              <Txt ml={10} mt={10} mr={10} size={13} style={{lineHeight: 18}}>
                {
                  'We work with sensitive information on a daily basis. The CIS Controls along with CIS-CAT Pro, a proven and indispensable tool, helps us to evaluate and maintain a security baseline for our IT infrastructure.'
                }
              </Txt>
            </View>

            <View>
              <Txt
                style={{fontWeight: 'bold'}}
                ml={10}
                mt={10}
                mr={10}
                size={16}
                color={Color.Black}>
                {'CIS Controls'}
              </Txt>
            </View>

            <View>
              <Txt ml={10} mt={10} mr={10} size={13} style={{lineHeight: 18}}>
                {
                  'Protect your organization from cyber-attacks with globally recognized CIS Controls, companion guides, and mappings.'
                }
              </Txt>
            </View>

            <View>
              <Txt
                style={{fontWeight: 'bold'}}
                ml={10}
                mt={10}
                mr={10}
                size={16}
                color={Color.Black}>
                {'CIS Benchmarks'}
              </Txt>
            </View>

            <View>
              <Txt ml={10} mt={10} mr={10} size={13} style={{lineHeight: 18}}>
                {
                  'Safeguard IT systems against cyber threats with more than 100 configuration guidelines across more than 25 vendor product families.'
                }
              </Txt>
            </View>

            <View>
              <Txt
                style={{fontWeight: 'bold'}}
                ml={10}
                mt={10}
                mr={10}
                size={16}
                color={Color.Black}>
                {'CIS SecureSuite'}
              </Txt>
            </View>

            <View>
              <Txt ml={10} mt={10} mr={10} size={13} style={{lineHeight: 18}}>
                {
                  'Secure your organization with resources and tools designed to harness the power of CIS Benchmarks and CIS Controls.'
                }
              </Txt>
            </View>
          </ScrollView>
        </View>
      ) : (
        <WebView
          style={{flex: 1, marginTop: 5}}
          ref={webviewRef}
          source={{uri: webViewUrl}}
          renderLoading
          cacheEnabled
          onNavigationStateChange={navState => {
            setCanGoBack(navState.canGoBack);
            setCanGoForward(navState.canGoForward);
          }}
        />
      )}

      {webViewUrl === null ? null : (
        <View style={styles.bottomBar}>
          <TouchableOpacity
            onPress={backButtonHandler}
            disabled={!canGoBack}
            style={styles.navigationBtn}>
            <Icon
              name={'chevron-left'}
              size={25}
              color={canGoBack ? Color.Tamarillo : 'grey'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={forwardButtonHandler}
            disabled={!canGoForward}
            style={styles.navigationBtn}>
            <Icon
              name={'chevron-right'}
              size={25}
              color={canGoForward ? Color.Tamarillo : 'grey'}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  navigationBtn: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    minHeight: 40,
    borderTopLeftRadius: 12,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: Color.White,
    alignSelf: 'flex-end',
    bottom:0,
    justifyContent: 'flex-end',
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
  header: {
    height: 70,
    marginBottom: -12,
    flexDirection: 'row',
    width: '100%',
    // position: 'absolute',
    // top: 0,
    // zIndex: 2,
    backgroundColor: Color.lightGrey,
  },
  heading: {flex: 10, justifyContent: 'flex-start', alignItems: 'flex-start',flexDirection: 'row' , right:20,top:20},
});
