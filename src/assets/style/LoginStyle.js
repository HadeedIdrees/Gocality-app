import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColor';
const LoginStyle = StyleSheet.create({
    imageStyle: {width: wp('100'), height: hp('100')},

    childView: {flex: 0.5, alignItems: 'center', paddingTop: wp('7')},
    headingText: {fontSize: wp('7'),color: '#8C7040',fontFamily: 'Poppins-Bold'},
    subHeadingView: {flexDirection: 'row'},
    subHeadingText: {fontSize: wp('3'),color: AppColor.white,fontFamily: 'Poppins-Light',},
    linkText: {fontSize: wp('3'),color: '#8C7040',fontFamily: 'Poppins-Medium',textDecorationLine: 'underline'},

    childView2: {flex: 1.5, alignItems: 'center', },
    inputView: {flexDirection: 'row',marginTop: wp('5'),width: wp('90'),justifyContent: 'space-evenly',alignItems: 'center'},
    inputStyle: {width: wp('80'),height: hp('6'),fontFamily: 'Poppins-Medium',fontSize: wp('3'),color: AppColor.white,},
    inputStyle2: {width: wp('75'),height: hp('6'),fontFamily: 'Poppins-Medium',fontSize: wp('3'),color: AppColor.white,},
    lineStyle: {width: wp('90'),height: wp('0.3'),backgroundColor: '#A6A6A6'},
    buttonView: {paddingTop: wp('7')},
    buttonStyle: {width: wp('65'),height: wp('12'),borderRadius: wp('10'),backgroundColor: '#214D5A', marginVertical: wp('3'), shadowRadius: 4,alignItems: 'center',justifyContent: 'center',},     
    buttonTextColor: {fontFamily: 'Poppins-Bold',fontSize: wp('4'),color: AppColor.white,},
    forgotViewStyle: {width: wp('90'), paddingTop: wp('2')},
    forgotTextStyle: {fontFamily: 'Poppins-Light',fontSize: wp('3'),color: AppColor.white,textAlign: 'right',},

    childView3: {flex: 1, alignItems: 'center'},
    socialView: {flexDirection: 'row',width: wp('50'),justifyContent: 'space-between'},
    socialImageStyle: {width: wp('10'), height: wp('10')},

    childView4: {flex: 0.8, alignItems: 'center', justifyContent: 'center'},

})

export {LoginStyle};