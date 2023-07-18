import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';

const NewPasswordStyle = StyleSheet.create({
    imageStyle: {width: wp('100'), height: hp('100')},
    childView: {flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: wp('10'), backgroundColor: 'rgba(0,0,0,0.2)'},
    headingText: {fontSize: wp('6'),color: '#E3D1BF',fontFamily: 'Poppins-Bold', paddingVertical: wp('4')},
    subHeadingText: {fontSize: wp('3.5'),color: '#E3D1BF',fontFamily: 'Poppins-Medium',},
    inputView: {flexDirection: 'column',paddingTop: wp('7'),width: wp('85'),justifyContent: 'space-evenly'},
    inputStyle: {width: wp('85'),height: hp('6'),fontFamily: 'Poppins-Medium',fontSize: wp('2.8'),color: '#E3D1BF'},
    lineStyle: {width: wp('85'),height: wp('0.3'),backgroundColor: '#E3D1BF'},
    buttonStyle: {width: wp('65'),height: wp('12'),borderRadius: wp('10'),backgroundColor: '#F6ECF4', marginVertical: wp('3'), shadowRadius: 0,alignItems: 'center',justifyContent: 'center',},
    buttonTextStyle: {fontFamily: 'Poppins-Bold',fontSize: wp('4'),color: '#214D5A'}
})

export {NewPasswordStyle};