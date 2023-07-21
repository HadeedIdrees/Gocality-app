import React from 'react';
import {
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {CongratsStyle} from '../assets/style/CongratsStyle';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import { AppColor } from '../assets/colors/AppColor';

const Congrats = () => {
  //States
  //Variables
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={AppColor.congratsImage}
      style={CongratsStyle.imageStyle}
      resizeMode="cover">
      <ImageBackground
        source={AppColor.shadowImage}
        style={CongratsStyle.imageStyle}
        resizeMode="cover">
        <View style={CongratsStyle.flex}></View>
        <View style={CongratsStyle.childView}>
          <Image
            source={AppColor.congratsSvg}
            style={CongratsStyle.logoStyle}
            resizeMode="contain"
          />
          <Text style={CongratsStyle.textStyle}>Your password is changed</Text>
          <TouchableOpacity
            style={CongratsStyle.buttonStyle}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <AntDesign name="arrowright" size={wp('8')} color={'black'} />
          </TouchableOpacity>
        </View>
        <View style={CongratsStyle.flex}></View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default Congrats;
