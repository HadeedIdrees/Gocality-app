import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColor';

const IntroStyle = StyleSheet.create({
    imageStyle: {width: wp('100'), height: hp('100')},

    firstViewStyle: {flex: 1, alignItems: 'center', marginTop: wp('20')},
    logoStyle: {width: wp('30'),height: wp('15'),resizeMode: 'cover',},
    logoText: {fontFamily: 'Poppins-Light',fontSize: wp('3'),color: AppColor.white,},

    secondViewStyle: {flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: wp('8')},
    signUpButton: {width: wp('65'),height: wp('12'),borderRadius: wp('10'),backgroundColor: AppColor.white, marginVertical: wp('3'), shadowRadius: 0,alignItems: 'center',justifyContent: 'center',},
    loginButton: {width: wp('65'),height: wp('12'),borderRadius: wp('10'),backgroundColor: AppColor.primaryTeal, marginVertical: wp('3'), shadowRadius: 0,alignItems: 'center',justifyContent: 'center',},
    subHeadingText: {fontFamily: 'Poppins-Bold',fontSize: wp('4'),color: AppColor.white},
    textStyle: {fontFamily: 'Poppins-Bold',fontSize: wp('4'),color: AppColor.primaryTeal},
    
    sliderStyle:{width: wp('30'),height: wp('1.2'),borderRadius: wp('1'),backgroundColor: AppColor.white,marginTop: wp('7')},
    
})

export {IntroStyle};