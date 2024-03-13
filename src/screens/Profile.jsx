import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import UploadAvatar from "../component/UploadAvatar";
import { avatarStudent, updateStudent } from "../redux/action/studentAction";
import { useDispatch, useSelector } from "react-redux";
import { setError, setUpdateStudent } from "../redux/sclice/studentSclice";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const Profile = () => {
  const { student, error } = useSelector((e) => e.student);

  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    contact: "1234567890",
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    dispatch(updateStudent(formData));
  };

  useEffect(() => {
    if (student) {
      setFormData({
        firstname: student.firstname,
        lastname: student.lastname,
        email: student.email,
        contact: student.contact,
      });
    }
  }, [student]);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(setError(null));
    }
  }, [error]);

  return (
    <View className="bg-white min-h-[100vh] relative">
      <Image
        source={require("../../assets/banner/Banner1.png")}
        className="w-full h-[140px]"
      ></Image>
      <View className=" w-full  flex-col ml-[30px] -mt-[40px]">
        <View className="">
          <Image
            source={require("../../assets/Images/profile.webp")}
            className="w-[80px] h-[80px] rounded-full"
          ></Image>
        </View>
        <View className="flex w-fit">
          <Text className="font-semibold text-lg">Haley Jessica </Text>
          <Text className="text-sm font-[400] opacity-[0.3]">UX Designer</Text>
        </View>
      </View>

      <View className="mt-[16px] space-y-3 px-[20px]">
        <View className="flex flex-row items-center gap-1 mb-0">
          <FontAwesome6 name="user-large" size={13} color="black" />
          <Text className="font-semibold text-[16px]">Profile Details</Text>
        </View>
        <View>
          <Text className="font-[500] text-[16px] my-[0.8px] ">Name</Text>
          <Text className="">Aniket Patidar</Text>
        </View>
        <View>
          <Text className="font-[500] text-[15px] my-[0.8px]">Email</Text>
          <Text>aniketpatidar76@gmail.com</Text>
        </View>
        <View>
          <Text className="font-[500] text-[15px] my-[0.8px]">Phone</Text>
          <Text>6266302210</Text>
        </View>
        <View>
          <Text className="font-[500] text-[15px] my-[0.8px]">Date of Birth</Text>
          <Text>20-01-2003</Text>
        </View>
        <View className="w-full border-[1px] border-[#dadada] rounded-md flex flex-row  items-center justify-center py-1">
          <Entypo name="plus" size={18} color="black" className="font-[400]" />
          <Text className="font-[400] text-[15px] my-[0.8px] text-center text-sm  capitalize ">
            Upload Resuma
          </Text>
        </View>
        <View className="w-full border-[1px] border-[#dadada] rounded-md flex flex-row  items-center justify-center py-1">
          <Ionicons name="create" size={18} color="black" />
          <Text className="font-[400] text-[15px] my-[0.8px] text-center text-sm  capitalize ">
            Create Resuma
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
