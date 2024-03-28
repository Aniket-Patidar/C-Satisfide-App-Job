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
import { setError } from "../redux/sclice/studentSclice";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { avatarStudent, updateStudent } from "../redux/action/studentAction";

import * as ImagePicker from "expo-image-picker";
import Loading from "../component/Loading";

const Profile = () => {
  const navigation = useNavigation();
  const { student, loading, error } = useSelector((e) => e.student);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    contact: "1234567890",
  });

  useEffect(() => {
    if (student) {
      setFormData({
        firstname: student?.firstname,
        lastname: student?.lastname,
        email: student?.email,
        contact: student?.contact,
      });
    }
  }, [student]);

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
    dispatch(updateStudent(formData));
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

    dispatch(avatarStudent(avatarFile));

    if (!result.cancelled) {
      setImage(result.uri);
    }

    if (image) {
    }
  };

  /* Resuma */

  return (
    <View>
      {loading ? (
        <Loading />
      ) : (
        <View className="bg-white min-h-[100vh] relative">
          <TouchableOpacity
            onPress={() => navigation.navigate("Setting")}
            className="absolute z-10 right-2 top-2"
          >
            <Ionicons name="settings" size={20} color="black" />
          </TouchableOpacity>

          <Image
            source={require("../../assets/banner/profile.jpg")}
            className="w-full h-[90px] mt-0"
          ></Image>

          <View className=" w-full  flex-col ml-[20px] -mt-[40px]">
            <TouchableOpacity onPress={pickImage} className="w-[80px] h-[80px]">
              {student?.avatar ? (
                <Image
                  source={{ uri: student?.avatar?.url }}
                  className="w-[80px] h-[80px] rounded-full"
                ></Image>
              ) : (
                <Image
                  source={require("../../assets/Images/profile.webp")}
                  className="w-[80px] h-[80px] rounded-full"
                ></Image>
              )}
            </TouchableOpacity>

            <View className="flex w-fit">
              {editMode ? (
                <TextInput
                  value={formData?.firstname}
                  onChangeText={(text) => handleChange("firstname", text)}
                  style={{ fontSize: 20, fontWeight: "bold" }}
                />
              ) : (
                <Text className="font-semibold text-lg capitalize">
                  {formData?.firstname} {formData?.lastname}
                </Text>
              )}
              <Text className="text-sm font-[400] opacity-[0.3]">
                UX Designer
              </Text>
            </View>
          </View>

          <View className="mt-[16px] space-y-4 px-[20px]">
            <View className="flex flex-row items-center gap-1 mb-0">
              {/* <FontAwesome6 name="user-large" size={13} color="black" /> */}
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
                  value={formData?.firstname}
                  onChangeText={(text) => handleChange("firstname", text)}
                />
              ) : (
                <Text>{formData?.firstname}</Text>
              )}
            </View>

            <View>
              <Text className="font-[500] text-[16px] my-[0.8px] ">
                Last Name
              </Text>
              {editMode ? (
                <TextInput
                  value={formData?.lastname}
                  onChangeText={(text) => handleChange("lastname", text)}
                />
              ) : (
                <Text>{formData?.lastname}</Text>
              )}
            </View>

            <View>
              <Text className="font-[500] text-[15px] my-[0.8px]">Email</Text>

              {editMode ? (
                <TextInput
                  value={formData?.email}
                  onChangeText={(text) => handleChange("email", text)}
                />
              ) : (
                <Text>{formData?.email}</Text>
              )}
            </View>
            <View>
              <Text className="font-[500] text-[15px] my-[0.8px]">Phone</Text>

              {editMode ? (
                <TextInput
                  value={formData?.contact}
                  onChangeText={(text) => handleChange("contact", text)}
                />
              ) : (
                <Text>{formData?.contact}</Text>
              )}
            </View>

            <TouchableOpacity className="w-full border-[1px] border-[#dadada] rounded-md flex flex-row  items-center justify-center py-1">
              <Entypo
                name="plus"
                size={18}
                color="black"
                className="font-[400]"
              />
              <Text className="font-[400] text-[15px] my-[0.8px] text-center text-sm  capitalize ">
                Upload Resume
              </Text>
            </TouchableOpacity>
            <View className="w-full border-[1px] border-[#dadada] rounded-md flex flex-row  items-center justify-center py-1">
              <Ionicons name="create" size={18} color="black" />
              <Text className="font-[400] text-[15px] my-[0.8px] text-center text-sm  capitalize ">
                Create Resume
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Profile;
