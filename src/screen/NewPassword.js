import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NewPasswordStyle} from '../assets/style/NewPasswordStyle';
import {useNavigation} from '@react-navigation/native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import { AppColor } from '../assets/colors/AppColor';

const NewPassword = () => {
  //States
  const [email, setEmail] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);

  //Variable
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={AppColor.newPasswordImage}
      style={NewPasswordStyle.imageStyle}
      resizeMode="cover">
      <ImageBackground
        source={AppColor.shadowImage}
        style={NewPasswordStyle.imageStyle}
        resizeMode="cover">
        <View style={NewPasswordStyle.childView}>
          <Text style={NewPasswordStyle.headingText}>New Password</Text>
          <View style={[NewPasswordStyle.inputView]}>
            <Text style={NewPasswordStyle.subHeadingText}>
              Enter New Password
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TextInput
                value={email}
                secureTextEntry={!passwordShow}
                placeholder="At least 8 digits"
                placeholderTextColor="#E3D1BF"
                style={[NewPasswordStyle.inputStyle, {width: wp('80')}]}
                onChangeText={text => {
                  setEmail(text);
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
                    color={'#E3D1BF'}
                  />
                ) : (
                  <Entypo name="eye" size={wp('4.5')} color={'#E3D1BF'} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={NewPasswordStyle.lineStyle}></View>
          <View style={NewPasswordStyle.inputView}>
            <Text style={NewPasswordStyle.subHeadingText}>
              Confirm New Password
            </Text>
            <TextInput
              value={email}
              secureTextEntry={!passwordShow}
              placeholder="********"
              placeholderTextColor="#E3D1BF"
              style={NewPasswordStyle.inputStyle}
              onChangeText={text => {
                setEmail(text);
              }}
            />
          </View>

          <View style={NewPasswordStyle.lineStyle}></View>
          <TouchableOpacity
            style={{paddingTop: wp('7')}}
            onPress={() => {
              navigation.replace('Congrats');
            }}>
            <Neomorph style={NewPasswordStyle.buttonStyle}>
              <Text style={NewPasswordStyle.buttonTextStyle}>Confirm</Text>
            </Neomorph>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default NewPassword;
