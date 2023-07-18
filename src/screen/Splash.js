import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SplashStyle} from '../assets/style/SplashStyle';
import { useNavigation } from '@react-navigation/native';
import {Neomorph} from 'react-native-neomorph-shadows';
import { AppColor } from '../assets/colors/AppColor';

const Splash = () => {
  //Variable
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={AppColor.splashImage}
      style={SplashStyle.imageStyle}
      resizeMode="cover">
      <ImageBackground
        source={AppColor.shadowImage}
        style={SplashStyle.imageStyle}
        resizeMode="cover">
        <View style={SplashStyle.firstViewStyle}>
          <Image
            source={AppColor.appLogo}
            style={SplashStyle.logoStyle}
          />
          <Text style={SplashStyle.logoText}>by Gocality</Text>
        </View>

        <View style={SplashStyle.secondViewStyle}>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('Intro');
            }}>
            <Neomorph style={SplashStyle.buttonStyle}>
              <Text style={SplashStyle.textStyle}>Let's Go</Text>
            </Neomorph>
          </TouchableOpacity>
          <View style={SplashStyle.sliderStyle} />
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default Splash;
