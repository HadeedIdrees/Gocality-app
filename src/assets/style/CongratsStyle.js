import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColor';
const CongratsStyle = StyleSheet.create({
    imageStyle: {width: wp('100'), height: hp('100')},
    flex: {flex:1},
    childView: {flex: 1, justifyContent: 'space-evenly', alignItems: 'center'},
    logoStyle: {width: wp('25'), height: wp('23')},
    textStyle: {fontFamily: 'Poppins-Medium', fontSize: wp('4'), textAlign: 'center', color: AppColor.white},
    buttonStyle: {width: wp('15'), height: wp('15'), borderRadius: wp('15'), backgroundColor: AppColor.white, alignItems: 'center', justifyContent: 'center'},

})

export {CongratsStyle};