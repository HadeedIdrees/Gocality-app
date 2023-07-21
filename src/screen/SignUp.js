import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
  Image,
} from 'react-native';
import {SignUpStyle} from '../assets/style/SignUpStyle';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Neomorph} from 'react-native-neomorph-shadows';
import {useNavigation} from '@react-navigation/native';
import {AppColor} from '../assets/colors/AppColor';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={SignUpStyle.imageStyle}
      source={AppColor.signUpImage}
      resizeMode="cover">
      <ImageBackground
        style={SignUpStyle.imageStyle}
        source={AppColor.shadowImage}
        resizeMode="cover">
        <ImageBackground
          style={SignUpStyle.imageStyle}
          source={AppColor.seccondShadowImage}
          resizeMode="cover">
          <View style={SignUpStyle.childView}>
            <Text style={SignUpStyle.headingText}>Sign Up</Text>
            <View style={SignUpStyle.subHeadingView}>
              <Text style={SignUpStyle.subHeadingText}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={SignUpStyle.linkText}>Login Now</Text>
              </TouchableOpacity>
            </View>

            <View style={SignUpStyle.childView2}>
              <View>
                <TextInput
                  placeholder="First Name"
                  placeholderTextColor={AppColor.placeHolderColor}
                  style={SignUpStyle.inputStyle}
                  onChangeText={text => {
                    setEmail(text);
                  }}
                />
                <View style={SignUpStyle.lineStyle}></View>
              </View>
              <View>
                <TextInput
                  placeholder="Last Name"
                  placeholderTextColor={AppColor.placeHolderColor}
                  style={SignUpStyle.inputStyle}
                  onChangeText={text => {
                    setEmail(text);
                  }}
                />
                <View style={SignUpStyle.lineStyle}></View>
              </View>
            </View>

            <TextInput
              placeholder="Last Name"
              placeholderTextColor={AppColor.placeHolderColor}
              style={SignUpStyle.inputStyle1}
              onChangeText={text => {
                setEmail(text);
              }}
            />
            <View style={SignUpStyle.lineStyle1}></View>

            <TextInput
              placeholder="Last Name"
              placeholderTextColor={AppColor.placeHolderColor}
              style={SignUpStyle.inputStyle1}
              onChangeText={text => {
                setEmail(text);
              }}
            />
            <View style={SignUpStyle.lineStyle1}></View>

            <TextInput
              placeholder="Last Name"
              placeholderTextColor={AppColor.placeHolderColor}
              style={SignUpStyle.inputStyle1}
              onChangeText={text => {
                setEmail(text);
              }}
            />
            <View style={SignUpStyle.lineStyle1}></View>

            <TouchableOpacity
              onPress={() => {
                console.log('Hello');
              }}
              style={SignUpStyle.buttonView}>
              <Neomorph style={SignUpStyle.buttonStyle}>
                <Text style={SignUpStyle.buttonTextColor}>Sign Up</Text>
              </Neomorph>
            </TouchableOpacity>

            <View style={SignUpStyle.childView3}>
              <Text style={SignUpStyle.subHeadingText}>or connect with</Text>
              <View style={SignUpStyle.socialView}>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL('https://www.linkedin.com/');
                  }}>
                  <Image
                    source={AppColor.linkedinSvg}
                    style={SignUpStyle.socialImageStyle}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL('https://www.facebook.com/');
                  }}>
                  <Image
                    source={AppColor.facebookSvg}
                    style={SignUpStyle.socialImageStyle}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL('https://www.pinterest.com/');
                  }}>
                  <Image
                    source={AppColor.pinterestSvg}
                    style={SignUpStyle.socialImageStyle}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL('https://www.instagram.com/');
                  }}>
                  <Image
                    source={AppColor.instagramSvg}
                    style={SignUpStyle.socialImageStyle}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </ImageBackground>
  );
};

export default SignUp;
