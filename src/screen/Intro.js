import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {IntroStyle} from '../assets/style/IntroStyle';
import {useNavigation} from '@react-navigation/native';
import { AppColor } from '../assets/colors/AppColor';

const Intro = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={AppColor.secondSplashImage}
      style={IntroStyle.imageStyle}
      resizeMode="cover">
      <ImageBackground
        source={AppColor.shadowImage}
        style={IntroStyle.imageStyle}
        resizeMode="cover">
        <View style={IntroStyle.firstViewStyle}>
          <Image
            source={AppColor.appLogo}
            style={IntroStyle.logoStyle}
          />
          <Text style={IntroStyle.logoText}>Goin` Local</Text>
        </View>

        <View style={IntroStyle.secondViewStyle}>
          <Text style={[IntroStyle.textStyle, {color: 'white'}]}>
            Find Your drive
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Neomorph style={IntroStyle.buttonStyle}>
              <Text style={[IntroStyle.textStyle, {color: '#214D5A'}]}>
                Sign Up
              </Text>
            </Neomorph>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('Login');
            }}>
            <Neomorph
              style={[IntroStyle.buttonStyle, {backgroundColor: '#214D5A'}]}>
              <Text style={[IntroStyle.textStyle, {color: 'white'}]}>
                Login
              </Text>
            </Neomorph>
          </TouchableOpacity>
          <View style={IntroStyle.sliderStyle}></View>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default Intro;
