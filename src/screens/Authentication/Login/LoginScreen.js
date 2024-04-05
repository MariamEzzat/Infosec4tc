import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
  BackHandler,
  Platform,
} from 'react-native';
import styles from './LoginScreen.style';
import {TxtSize, Color, TxtWeight, Space} from '../../../theme/const';
import {Txt} from '../../../common';
import {Logo, login} from '../../../images';
import {verticalScale, scale} from '../../../utils/dimensions';
import {Input} from '../../../common/TxtInput/TxtInput';
import {Btn} from '../../../common/button/Btn';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

const LoginScreen = ({navigation}) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    GoogleSignin.configure({
      webClientId:
        '633010889799-05b5nolqbe7h2qitulkqbdn0ef39rh7p.apps.googleusercontent.com',
    });
  }, []);

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [loader, setLoader] = useState(false);

  const goToLoginHandler = () => navigation.navigate('Signup');

  const onPresslogin = () => {
    if (email && password) {
      setLoader(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setLoader(false);
          setEmail('');
          setpassword('');
          navigation.navigate('App');
        })
        .catch(error => {
          setLoader(false);
          alert(error.message);
        });
    } else {
      alert('Please fill details');
    }
  };

  const onGoogleButtonPress = async () => {
    try {
      setLoader(true);
      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      setLoader(false);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      setLoader(false);
      // alert(error.message)
    }
  };

  const handleBackButton = () => {
    BackHandler.exitApp();
  };

  const onPressfacebookLogin = async () => {
    try {
      setLoader(true);
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        setLoader(false);

        // alert('User cancelled the login process');
        return;
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        setLoader(false);
        alert('Something went wrong obtaining access token');
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      setLoader(false);

      // Sign-in the user with the credential
      return auth().signInWithCredential(facebookCredential);
    } catch (error) {
      // alert(error.message)
      setLoader(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{backgroundColor: Color.White}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoTitle}>
          <Image source={Logo} style={styles.loginImg} />
        </View>

        <Txt
          size={TxtSize.XL}
          center
          mt={12}
          color={Color.Black}
          weight={TxtWeight.Bold}>
          Welcome Back
        </Txt>
        <Txt
          size={TxtSize.MD}
          center
          mt={6}
          color={Color.secondary}
          weight={TxtWeight.Regular}>
          Login back to your exising account of infosec4TC
        </Txt>

        <View style={styles.inputView}>
          <Input
            value={email}
            onChangeText={text => setEmail(text)}
            icon={'email-outline'}
            placeholder={'Email'}
          />
          <Input
            value={password}
            onChangeText={text => setpassword(text)}
            secureTextEntry
            icon={'lock'}
            placeholder={'Password'}
          />

          <Txt
            onPress={() => navigation.navigate('ForgotPassword')}
            size={TxtSize.SM}
            weight={TxtWeight.Bold}
            mr={20}
            mt={4}
            color={Color.secondary}
            style={{textAlign: 'right', fontWeight: 'bold'}}>
            Forget Password
          </Txt>
        </View>

        {!loader ? (
          <Btn onPress={onPresslogin}>Login</Btn>
        ) : (
          <ActivityIndicator color={'red'} />
        )}

        {Platform.OS === 'android' && (
          <>
            <Txt
              center
              color={Color.secondary}
              size={TxtSize.SM}
              mt={18}
              mb={8}>
              Or connect using
            </Txt>

            <View style={styles.socialLogin}>
              <Btn
                onPress={onPressfacebookLogin}
                btnStyle={{borderRadius: 5, width: scale(130)}}
                icon={'facebook'}
                bgColor={'#375c8f'}>
                Facebook
              </Btn>
              <Btn
                onPress={onGoogleButtonPress}
                bgColor={'#f34238'}
                btnStyle={{borderRadius: 5, width: scale(130)}}
                icon={'google'}>
                Google
              </Btn>
            </View>
          </>
        )}
      </ScrollView>
      <TouchableOpacity onPress={goToLoginHandler}>
        <Txt style={{paddingVertical: 8}} center>
          You are new to Infosec4tc?
          <Txt color={Color.Tamarillo} weight={TxtWeight.Semi}>
            Sign Up
          </Txt>
        </Txt>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
