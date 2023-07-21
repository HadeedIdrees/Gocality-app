import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColor';

const ForgotPasswordStyle = StyleSheet.create({
    imageStyle: {width: wp('100'), height: hp('100')},

    childView: {flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: wp('7')},
    backButtonStyle: {width: wp('85'), alignItems: 'flex-start'},
    headingText: {fontSize: wp('5'),color: '#E3D1BF',fontFamily: 'Poppins-Bold', paddingVertical: wp('4')},
    subHeadingText: {fontSize: wp('3'),color: AppColor.white,fontFamily: 'Poppins-Light',},

    inputView: {flexDirection: 'row',paddingTop: wp('7'),width: wp('85'),justifyContent: 'space-evenly',alignItems: 'center'},
    inputStyle: {width: wp('75'),height: hp('6'),fontFamily: 'Poppins-Medium',fontSize: wp('3'),color: AppColor.white,},
    lineStyle: {width: wp('85'),height: wp('0.3'),backgroundColor: '#E3D1BF'},
    
    buttonViewStyle: {width: wp('85'), alignItems: 'flex-end', paddingVertical: wp('7')},
    buttonStyle: {width: wp('10'), height: wp('10'), borderRadius: wp('10'), backgroundColor: AppColor.white, alignItems: 'center', justifyContent: 'center'},

})

export {ForgotPasswordStyle};