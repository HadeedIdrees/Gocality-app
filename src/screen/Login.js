import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Linking,
  Image,
  Alert,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Neomorph} from 'react-native-neomorph-shadows';
import {LoginStyle} from '../assets/style/LoginStyle';
import {useNavigation} from '@react-navigation/native';
import {AppColor} from '../assets/colors/AppColor';
import {
  statusCodes,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

const Login = () => {
  //States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);
  const [user, setUser] = useState({});

  //Variable
  const navigation = useNavigation();

  //Functions
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('due-----', userInfo);
      setUser(userInfo);
    } catch (error) {
      console.log('User', user);
      console.log('Message-----', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing IN');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google Play Service is Not Available');
      } else {
        console.log('Some other errors');
      }
    }
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('Please Login');
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('Edit---', userInfo);
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('user is not sign in Yet!');
        console.log('User not sign in yet');
      } else {
        alert('Something went wrong');
        console.log('Something went wrong');
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({});
    } catch (error) {
      console.log(error);
    }
  };

  //Use Effect
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '307211734525-kuqt52fvp9lhkimdokdk2gq71jkvsds0.apps.googleusercontent.com',
    });
    isSignedIn();
  }, []);

  return (
    <ImageBackground
      style={LoginStyle.imageStyle}
      source={AppColor.loginImage}
      resizeMode="cover">
      <ImageBackground
        source={AppColor.shadowImage}
        style={LoginStyle.imageStyle}
        resizeMode="cover">
        <View style={LoginStyle.childView}>
          <Text style={LoginStyle.headingText}>Login</Text>
          <View style={LoginStyle.subHeadingView}>
            <Text style={LoginStyle.subHeadingText}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={LoginStyle.linkText}>Sign Up Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={LoginStyle.childView2}>
          <View style={LoginStyle.inputView}>
            <Fontisto name="email" size={wp('5')} color={AppColor.white} />
            <TextInput
              value={email}
              placeholder="Email/Username"
              placeholderTextColor="white"
              style={LoginStyle.inputStyle}
              onChangeText={text => {
                setEmail(text);
              }}
            />
          </View>
          <View style={LoginStyle.lineStyle}></View>

          <View style={LoginStyle.inputView}>
            <Feather name="lock" size={wp('5')} color={AppColor.white} />
            <TextInput
              value={password}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry={!passwordShow}
              style={LoginStyle.inputStyle2}
              onChangeText={text => {
                setPassword(text);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                if (passwordShow === true) {
                  setPasswordShow(false);
                } else {
                  setPasswordShow(true);
                }
              }}>
              {!passwordShow ? (
                <Entypo
                  name="eye-with-line"
                  size={wp('4.5')}
                  color={AppColor.white}
                />
              ) : (
                <Entypo name="eye" size={wp('4.5')} color={AppColor.white} />
              )}
            </TouchableOpacity>
          </View>
          <View style={LoginStyle.lineStyle}></View>
          <TouchableOpacity
            style={LoginStyle.forgotViewStyle}
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text style={LoginStyle.forgotTextStyle}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TabBar');
            }}
            style={LoginStyle.buttonView}>
            <Neomorph style={LoginStyle.buttonStyle}>
              <Text style={LoginStyle.buttonTextColor}>Login</Text>
            </Neomorph>
          </TouchableOpacity>
        </View>

        <View style={LoginStyle.childView3}>
          <Text style={LoginStyle.subHeadingText}>or connect with</Text>
          <View style={LoginStyle.socialView}>
            <TouchableOpacity onPress={signIn}>
              <Image
                source={AppColor.linkedinSvg}
                style={LoginStyle.socialImageStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.facebook.com/');
              }}>
              <Image
                source={AppColor.facebookSvg}
                style={LoginStyle.socialImageStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.pinterest.com/');
              }}>
              <Image
                source={AppColor.pinterestSvg}
                style={LoginStyle.socialImageStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.instagram.com/');
              }}>
              <Image
                source={AppColor.instagramSvg}
                style={LoginStyle.socialImageStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={LoginStyle.childView4}>
          <Text style={LoginStyle.subHeadingText}>
            By signing in you are agreening our
          </Text>
          <TouchableOpacity>
            <Text style={[LoginStyle.linkText, {color: '#214D5A'}]}>
              Terms and policy apply
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default Login;
