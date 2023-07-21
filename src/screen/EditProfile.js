import React from 'react';
import {EditProfileStyle} from '../assets/style/EditProfileStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {AppColor} from '../assets/colors/AppColor';
import {Neomorph} from 'react-native-neomorph-shadows';
import {useNavigation} from '@react-navigation/native';

const EditProfile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={EditProfileStyle.scrollView}>
      <View style={EditProfileStyle.parentView}>
        <View style={EditProfileStyle.headerView}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign name="arrowleft" size={wp('6')} color={'black'} />
          </TouchableOpacity>
          <Text style={EditProfileStyle.headerText}>Edit Profile</Text>
        </View>
        <View style={EditProfileStyle.imageView}>
          <ImageBackground
            style={EditProfileStyle.innerImageView}
            source={AppColor.profileImage}
          />
          <TouchableOpacity>
            <Image
              source={AppColor.imageEdit}
              style={EditProfileStyle.editImageIcon}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <Text style={EditProfileStyle.nameText}>John Doe</Text>

        <TextInput style={EditProfileStyle.textInput} placeholder="Name" />
        <TextInput style={EditProfileStyle.textInput} placeholder="Gender" />
        <View style={EditProfileStyle.birthInputView}>
          <TextInput
            style={EditProfileStyle.birthTextInput}
            textAlign="center"
            placeholder="22"
          />
          <TextInput
            style={EditProfileStyle.birthTextInput}
            textAlign="center"
            placeholder="Mar"
          />
          <TextInput
            style={EditProfileStyle.birthTextInput}
            textAlign="center"
            placeholder="1998"
          />
        </View>
        <TextInput
          style={EditProfileStyle.textInput}
          placeholder="SSN Number"
        />
        <TextInput
          style={EditProfileStyle.textInput}
          placeholder="Blood Group"
        />
        <TextInput style={EditProfileStyle.textInput} placeholder="Street" />
        <TextInput style={EditProfileStyle.textInput} placeholder="City" />
        <View style={EditProfileStyle.stateInputView}>
          <TextInput
            style={EditProfileStyle.stateTextInput}
            placeholder="State"
          />
          <TextInput
            style={EditProfileStyle.stateTextInput}
            placeholder="Zip"
          />
        </View>
        <TextInput style={EditProfileStyle.textInput} placeholder="Country" />
        <TextInput
          style={EditProfileStyle.textInput}
          placeholder="Contact"
          keyboardType="phone-pad"
        />
        <TextInput
          style={EditProfileStyle.textInput}
          placeholder="Email"
          keyboardType="email-address"
        />

        <TouchableOpacity style={EditProfileStyle.buttonView}>
          <Neomorph style={EditProfileStyle.buttonStyle}>
            <Text style={EditProfileStyle.buttonTextColor}>Submit</Text>
          </Neomorph>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
