import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColor';

const SignUpStyle = StyleSheet.create({
  imageStyle: {width: wp('100'), height: hp('100')},
  childView: {flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: wp('7')},
  headingText: {fontSize: wp('7'),color: AppColor.primaryBlush, fontFamily: 'Poppins-Bold'},
  subHeadingView: {flexDirection: 'row'},
  subHeadingText: {fontSize: wp('3'),color: AppColor.white,fontFamily: 'Poppins-Light',},
  linkText: {fontSize: wp('3'),color: AppColor.primaryBlush, fontFamily: 'Poppins-Medium',textDecorationLine: 'underline'},
  childView2: {width: wp('85'),flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',marginVertical: wp('8'),},
  inputStyle: {width: wp('36'),height: hp('6'),fontFamily: 'Poppins-Medium',fontSize: wp('3'),color: AppColor.white,},
  lineStyle: {width: wp('36'),height: wp('0.3'),backgroundColor: '#A6A6A6'},
  inputStyle1: {width: wp('85'),height: hp('6'),fontFamily: 'Poppins-Medium',fontSize: wp('3'),color: AppColor.white},
  lineStyle1: {width: wp('85'),height: wp('0.3'),backgroundColor: '#A6A6A6', marginBottom: wp('7')},
  buttonView: {paddingTop: wp('7')},
  buttonStyle: {width: wp('65'),height: wp('12'),borderRadius: wp('10'),backgroundColor: '#214D5A', marginVertical: wp('3'), shadowRadius: 4,alignItems: 'center',justifyContent: 'center',},     
  buttonTextColor: {fontFamily: 'Poppins-Bold',fontSize: wp('4'),color: AppColor.white,},
  childView3: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  socialView: {flexDirection: 'row',width: wp('50'),justifyContent: 'space-between'},
  socialImageStyle: {width: wp('10'), height: wp('10')},

});

export {SignUpStyle};
