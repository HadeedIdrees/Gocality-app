import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ForgotPasswordStyle} from '../assets/style/ForgotPasswordStyle';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import { AppColor } from '../assets/colors/AppColor';

const ForgotPassword = () => {
  //States
  const [email, setEmail] = useState('');
  //Variable
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={AppColor.forgotPasswordImage}
      style={ForgotPasswordStyle.imageStyle}
      resizeMode="cover">
      <ImageBackground
        source={AppColor.shadowImage}
        style={ForgotPasswordStyle.imageStyle}
        resizeMode="cover">
        <View style={ForgotPasswordStyle.childView}>
          <View style={ForgotPasswordStyle.backButtonStyle}>
            <TouchableOpacity
              onPress={() => {
                navigation.replace('Login');
              }}>
              <AntDesign name="left" size={wp('5')} color={AppColor.white} />
            </TouchableOpacity>
          </View>
          <Text style={ForgotPasswordStyle.headingText}>Forgot Password</Text>

          <Text style={ForgotPasswordStyle.subHeadingText}>
            No problem! We are here to help
          </Text>

          <View style={ForgotPasswordStyle.inputView}>
            <Fontisto name="email" size={wp('5')} color={AppColor.white} />
            <TextInput
              value={email}
              placeholder="Email/Username"
              placeholderTextColor="white"
              style={ForgotPasswordStyle.inputStyle}
              onChangeText={text => {
                setEmail(text);
              }}
            />
          </View>
          <View style={ForgotPasswordStyle.lineStyle}></View>
          <View style={ForgotPasswordStyle.buttonViewStyle}>
            <TouchableOpacity
              style={ForgotPasswordStyle.buttonStyle}
              onPress={() => {
                navigation.navigate('NewPassword');
              }}>
              <AntDesign name="arrowright" size={wp('5')} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default ForgotPassword;
