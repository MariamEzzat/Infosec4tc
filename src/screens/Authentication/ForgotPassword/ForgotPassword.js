import React, { Component, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './ForgotPassword.style';
import Txt from '../../../common/text/Text';
import { Color, TxtWeight, TxtSize } from '../../../theme/const';
import { Input } from '../../../common/TxtInput/TxtInput';
import { Btn } from '../../../common/button/Btn';
import { Logo } from '../../../images';
import { ScrollView } from 'react-native-gesture-handler';
import { verticalScale } from '../../../utils/dimensions';
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen = ({ navigation }) => {


    const [email, setEmail] = useState('')


    const onSignup = () => navigation.navigate('Login');

    const onPressSentEmail = () => {

        auth().sendPasswordResetEmail(email).then(() => {
            alert('Email sent')
            setEmail('')
        }).catch(err => {
            alert(err)
        })
    }
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.imgLogo} />
            <Txt
                size={TxtSize.XL}
                center
                mt={verticalScale(2)}
                color={Color.Black}
                weight={TxtWeight.Bold}>
                Forgot Password
            </Txt>
            {/* <Txt
                size={TxtSize.MD}
                center
                mt={6}
                mr={12}
                ml={12}
                color={Color.secondary}
                weight={TxtWeight.Regular}>
                Create your account on Infosec4tc to get news on cyber security
            </Txt> */}

            <View style={styles.inputView}>
                <Input value={email} onChangeText={(text) => setEmail(text)} icon={'email-outline'} placeholder={'User email'} />
            </View>
            <Btn onPress={onPressSentEmail} >Sent Email</Btn>
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

export default ForgotPasswordScreen;
