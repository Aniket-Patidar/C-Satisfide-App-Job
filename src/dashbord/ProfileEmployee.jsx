import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  Image,
  StatusBar,
  ActivityIndicator,
  ToastAndroid,
  Alert,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { setError } from "../redux/sclice/employeeSclice";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { avatarEmployee, updateEmployee } from "../redux/action/employeeAction";

import * as ImagePicker from "expo-image-picker";
import Loading from "../component/Loading";

const Profile = () => {
  const navigation = useNavigation();
  const { employee, loading, error } = useSelector((e) => e.employee);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    contact: "1234567890",
    organisationname: "sss",
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        firstname: employee.firstname,
        lastname: employee.lastname,
        email: employee.email,
        contact: employee.contact,
        organisationname: employee.organisationname,
      });
    }
  }, [employee]);

  useEffect(() => {
    if (error) {
      ToastAndroid.show(error, ToastAndroid.SHORT);
      dispatch(setError(null));
    }
  }, [error]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    /*  todo */
    console.log(formData);
    // dispatch(updateEmployee(formData));
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  React.useEffect(() => {
    StatusBar.setBackgroundColor("#4080ED");
  }, []);

  const [image, setImage] = useState(null);

  console.log(employee);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    const avatarFile = {
      uri: result.assets[0].uri,
      name: "avatar.jpg",
      type: result.assets[0].mimeType,
    };

    dispatch(avatarEmployee(avatarFile));

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View>
      {loading ? (
        <Loading />
      ) : (
        <View className="bg-white min-h-[100vh] relative">
          <Image
            source={require("../../assets/banner/profile.jpg")}
            className="w-full h-[90px] mt-0"
          ></Image>

          <View className=" w-full flex-col  flex items-center  -mt-[40px] ">
            <TouchableOpacity onPress={pickImage} className="w-[80px] h-[80px]">
              {/* TODO */}
              {employee.organisationlogo.ur ? (
                <Image
                  source={{ uri: employee?.orgainzation?.url }}
                  className="w-[85px] h-[85px] rounded-full"
                ></Image>
              ) : (
                <Image
                  source={require("../../assets/Images/profile.webp")}
                  className="w-[85px] h-[85px] rounded-full"
                ></Image>
              )}
            </TouchableOpacity>

            <View className="flex w-fit">
              {editMode ? (
                <TextInput
                  value={formData.firstname}
                  onChangeText={(text) => handleChange("firstname", text)}
                  style={{ fontSize: 20, fontWeight: "bold" }}
                />
              ) : (
                <Text className="font-semibold text-lg capitalize">
                  {formData.firstname} {formData.lastname}
                </Text>
              )}
            </View>
          </View>

          <View className="mt-[16px] space-y-4 px-[20px]">
            <View className="flex flex-row items-center gap-1 mb-0">
              <Text className="font-semibold text-[16px]">Profile Details</Text>
              {editMode ? (
                <TouchableOpacity onPress={handleSave}>
                  <Feather name="check" size={20} color="black" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={handleEdit}>
                  <Feather name="edit" size={13} color="black" />
                </TouchableOpacity>
              )}
            </View>
            <View>
              <Text className="font-[500] text-[16px] my-[0.8px] ">
                First Name
              </Text>
              {editMode ? (
                <TextInput
                  value={formData.firstname}
                  onChangeText={(text) => handleChange("firstname", text)}
                />
              ) : (
                <Text>{formData.firstname}</Text>
              )}
            </View>

            <View>
              <Text className="font-[500] text-[16px] my-[0.8px] ">
                Last Name
              </Text>
              {editMode ? (
                <TextInput
                  value={formData.lastname}
                  onChangeText={(text) => handleChange("lastname", text)}
                />
              ) : (
                <Text>{formData.lastname}</Text>
              )}
            </View>

            <View>
              <Text className="font-[500] text-[15px] my-[0.8px]">Email</Text>

              {editMode ? (
                <TextInput
                  value={formData.email}
                  onChangeText={(text) => handleChange("email", text)}
                />
              ) : (
                <Text>{formData.email}</Text>
              )}
            </View>
            <View>
              <Text className="font-[500] text-[15px] my-[0.8px]">Phone</Text>
              {editMode ? (
                <TextInput
                  value={formData.contact}
                  onChangeText={(text) => handleChange("contact", text)}
                />
              ) : (
                <Text>{formData.contact}</Text>
              )}
            </View>

            <View>
              <Text className="font-[500] text-[15px] my-[0.8px]">
                Organisation Name
              </Text>
              {editMode ? (
                <TextInput
                  value={formData.organisationname}
                  onChangeText={(text) =>
                    handleChange("organisationname", text)
                  }
                />
              ) : (
                <Text>{formData.organisationname}</Text>
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Profile;
