import React, { Component, useState } from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './Signup.style';
import Txt from '../../../common/text/Text';
import { Color, TxtWeight, TxtSize } from '../../../theme/const';
import { Input } from '../../../common/TxtInput/TxtInput';
import { Btn } from '../../../common/button/Btn';
import { Logo } from '../../../images';
import { ScrollView } from 'react-native-gesture-handler';
import { verticalScale } from '../../../utils/dimensions';
import auth from '@react-native-firebase/auth';

const SignupScreen = ({ navigation }) => {

  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [loader, setLoader] = useState(false)

  const onPressSignUp = () => {
    setLoader(true)

    if (username && email && password && password.length >= 6 && confirmPassword && confirmPassword.length >= 6 && password === confirmPassword) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          setLoader(false)
          console.log('User account created & signed in!');
          navigation.navigate('App')
        })
        .catch(error => {
          setLoader(false)
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }
          console.error(error);
        });
    }

  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={Logo} style={styles.imgLogo} />
        <Txt
          size={TxtSize.XL}
          center
          mt={verticalScale(2)}
          color={Color.Black}
          weight={TxtWeight.Bold}>
          Welcome to infosec4TC
        </Txt>
        <Txt
          size={TxtSize.MD}
          center
          mt={6}
          mr={12}
          ml={12}
          color={Color.secondary}
          weight={TxtWeight.Regular}>
          Create your account on Infosec4tc to get news on cyber security
        </Txt>

        <View style={styles.inputView}>
          <Input value={username} onChangeText={(text) => setUsername(text)} icon={'email-outline'} placeholder={'Username'} />
          <Input value={email} onChangeText={(text) => setEmail(text)} icon={'email-outline'} placeholder={'User email'} />
          <Input value={password} onChangeText={(text) => setPassword(text)} secureTextEntry icon={'lock'} placeholder={'User Password'} />
          <Input value={confirmPassword} onChangeText={(text) => setconfirmPassword(text)} secureTextEntry icon={'lock'} placeholder={'Confirm password'} />
        </View>
        {!loader ? <Btn onPress={onPressSignUp}>Sign Up</Btn> : <ActivityIndicator color={'red'} />}

      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Txt style={{ paddingVertical: 8 }} center>
          You already have an account?
          <Txt color={Color.Tamarillo} weight={TxtWeight.Semi}>
            Login
          </Txt>
        </Txt>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
