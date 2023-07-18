import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';

const IntroStyle = StyleSheet.create({
    imageStyle: {width: wp('100'), height: hp('100')},

    firstViewStyle: {flex: 1, alignItems: 'center', marginTop: wp('20')},
    logoStyle: {width: wp('30'),height: wp('15'),resizeMode: 'cover',},
    logoText: {fontFamily: 'Poppins-Light',fontSize: wp('3'),color: 'white',},

    secondViewStyle: {flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: wp('8')},
    buttonStyle: {width: wp('65'),height: wp('12'),borderRadius: wp('10'),backgroundColor: '#F6ECF4', marginVertical: wp('3'), shadowRadius: 0,alignItems: 'center',justifyContent: 'center',},
    textStyle: {fontFamily: 'Poppins-Bold',fontSize: wp('4'),color: '#214D5A'},
    
    sliderStyle:{width: wp('30'),height: wp('1.2'),borderRadius: wp('1'),backgroundColor: 'white',marginTop: wp('7')},
    
})

export {IntroStyle};