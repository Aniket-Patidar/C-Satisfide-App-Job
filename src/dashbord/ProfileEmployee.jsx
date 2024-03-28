import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";

/* icons */
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const ProfileEmployee = () => {
  const { employee, loading, error } = useSelector((e) => e.employee);

  const [formData, setFormData] = useState({
    name: "John",
    email: "john.doe@example.com",
    contact: "1234567890",
    organisationname: "sss",
    website: "",
    socialMedia: "",
    location: "",
    industry: "",
    companySize: "",
  });

  return (
    <View className="">
      <View className="w-full h-[210px] bg-[#4080ED] px-[13px] space-y-2">
        <Text className="mt-[13px] font-semibold text-[22px] text-white">
          My Profile
        </Text>
        <View className="flex items-center justify-center ">
          <View className="w-full h-[140px] bg-white rounded-lg">
            <View className="flex  items-start flex-row  space-x-4 p-2">
              <View className="h-[80px] w-[80px] bg-red-100 rounded-md"></View>
              <View>
                <Text className="font-semibold text-[#4080ED] text-lg">
                  Aniket Patidar
                </Text>
                <Text className="">xyz</Text>
                <Text>Bhopal</Text>
              </View>
            </View>
            <View className="flex flex-row items-center space-x-2 ">
              <View className="flex flex-row bg-[#dde0e7de] w-[80px] ml-[11px] justify-center px-2 h-[33px] rounded-md items-center">
                <EvilIcons name="pencil" size={24} color="#3A3D4F" />
                <Text className="text-[#3A3D4F]">Edit</Text>
              </View>

              <View className="flex flex-row border-[1px] w-[180px] border-[#01C698] space-x-2 justify-center px-2 h-[33px] rounded-md items-center">
                <FontAwesome name="whatsapp" size={20} color="#01C698" />
                <Text className="text-[#01C698]">Share Resume</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="px-[13px] mt-[13px] ">
          <View className="flex flex-row items-center space-x-1 ">
            <Text className="font-semibold text-[16px]">Personal Details</Text>
          </View>
          <View className="space-y-2 my-3">
            <View className="flex flex-row items-start gap-1 border-b-[.4px] border-gray-300 py-2">
              <Octicons name="person" size={20} color="black" />
              <View className="space-y-1">
                <Text>Name</Text>
                <Text className="text-[13px]">Aniket Patidar</Text>
              </View>
            </View>

            <View className="flex flex-row items-start gap-1 border-b-[.4px] border-gray-300 py-2">
              <Feather name="phone" size={17} color="black" />
              <View className="space-y-1">
                <Text>Mobile Number</Text>
                <Text className="text-[13px]">6266302210</Text>
              </View>
            </View>

            <View className="flex flex-row items-start gap-1 border-b-[.4px] border-gray-300 py-2">
              <AntDesign name="mail" size={20} color="black" />
              <View className="space-y-1">
                <Text>Email</Text>
                <Text className="text-[13px]">aniketoatidar76@gmail.com</Text>
              </View>
            </View>

            <View className="flex flex-row items-start gap-1 border-b-[.4px] border-gray-300 py-2">
              <Ionicons name="location-outline" size={20} color="black" />
              <View className="space-y-1">
                <Text>Location</Text>
                <Text className="text-[13px]">Bhopal</Text>
              </View>
            </View>

            <View className="flex flex-row items-start gap-1 border-b-[.4px] border-gray-300 py-2">
              <Ionicons name="location-outline" size={20} color="black" />
              <View className="space-y-1">
                <Text>Location</Text>
                <Text className="text-[13px]">Bhopal</Text>
              </View>
            </View>

            <View className="flex flex-row items-start gap-1 border-b-[.4px] border-gray-300 py-2">
              <AntDesign name="filetext1" size={20} color="black" />
              <View className="space-y-1">
                <Text>Create Resume</Text>
                <Text className="text-[13px]">Best Ats friendly Resume</Text>
              </View>
            </View>

            <View className="flex flex-row items-start gap-1 border-b-[.4px] border-gray-300 py-2">
              <MaterialCommunityIcons
                name="cloud-upload-outline"
                size={20}
                color="black"
              />
              <View className="space-y-1">
                <Text>Upload Your Resume</Text>
                <Text className="text-[13px]"></Text>
              </View>
            </View>
          </View>
      </View>
    </View>
  );
};

export default ProfileEmployee;

// export default ProfileEmployee
// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   Button,
//   StyleSheet,
//   Image,
//   StatusBar,
//   ActivityIndicator,
//   ToastAndroid,
//   Alert,
//   ScrollViewBase,
//   ScrollView,
// } from "react-native";

// import { Feather } from "@expo/vector-icons";
// import { useSelector, useDispatch } from "react-redux";
// import { setError } from "../redux/sclice/employeeSclice";
// import { useNavigation } from "@react-navigation/native";
// import { avatarEmployee, updateEmployee } from "../redux/action/employeeAction";

// import * as ImagePicker from "expo-image-picker";
// import Loading from "../component/Loading";
// import PrivacyPolicy from "./PrivacyPolicy";

// /* icon */
// import { MaterialIcons } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
// import { EvilIcons } from "@expo/vector-icons";
// import { SimpleLineIcons } from "@expo/vector-icons";

// const Profile = () => {
//   const navigation = useNavigation();
//   const { employee, loading, error } = useSelector((e) => e.employee);
//   const dispatch = useDispatch();
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     firstname: "John",
//     lastname: "Doe",
//     email: "john.doe@example.com",
//     contact: "1234567890",
//     organisationname: "sss",
//     website: "",
//     socialMedia: "",
//     location: "",
//     industry: "",
//     companySize: "",
//   });

//   useEffect(() => {
//     if (employee) {
//       setFormData({
//         firstname: employee?.firstname,
//         lastname: employee?.lastname,
//         email: employee?.email,
//         contact: employee?.contact,
//         organisationname: employee?.organisationname,
//         website: employee?.website || "",
//         socialMedia: employee?.socialMedia || "",
//         location: employee?.location || "",
//         industry: employee?.industry || "",
//         companySize: employee?.companySize || "",
//       });
//     }
//   }, [employee]);

//   useEffect(() => {
//     if (error) {
//       ToastAndroid.show(error, ToastAndroid.SHORT);
//       dispatch(setError(null));
//     }
//   }, [error]);

//   const handleEdit = () => {
//     setEditMode(true);
//   };

//   const handleSave = () => {
//     setEditMode(false);
//     /* TODO */
//     // dispatch(updateEmployee(formData));
//   };

//   const handleChange = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   React.useEffect(() => {
//     StatusBar.setBackgroundColor("#4080ED");
//   }, []);

//   const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });
//     const avatarFile = {
//       uri: result.assets[0].uri,
//       name: "avatar.jpg",
//       type: result.assets[0].mimeType,
//     };

//     dispatch(avatarEmployee(avatarFile));

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   return (
//     <ScrollView className="">
//       {loading ? (
//         <Loading />
//       ) : (
//         <>
//           {employee && (
//             <View className="bg-white min-h-[150vh] relative">
//               <View className=" w-full flex-col  flex items-center mt-[25px]">
//                 <TouchableOpacity
//                   onPress={pickImage}
//                   className="w-[80px] h-[80px]"
//                 >
//                   {employee.organisationlogo.url ? (
//                     <Image
//                       source={{ uri: employee?.organisationlogo?.url }}
//                       className="w-[85px] h-[85px] rounded-full"
//                     ></Image>
//                   ) : (
//                     <Image
//                       source={require("../../assets/Images/profile.webp")}
//                       className="w-[85px] h-[85px] rounded-full"
//                     ></Image>
//                   )}
//                 </TouchableOpacity>

//                 <View className="flex w-fit">
//                   {editMode ? (
//                     <TextInput
//                       value={formData?.firstname}
//                       onChangeText={(text) => handleChange("firstname", text)}
//                       style={{ fontSize: 20, fontWeight: "bold" }}
//                     />
//                   ) : (
//                     <Text className="font-semibold text-lg capitalize">
//                       {formData?.firstname}
//                     </Text>
//                   )}
//                 </View>
//               </View>

//               <View className="mt-[16px] space-y-4 px-[20px] text-start">
//                 <View className="flex flex-row items-center gap-1 mb-0">
//                   <Text className="font-semibold text-[16px]">Information</Text>
//                 </View>

//                 <View className="flex flex-row items-center justify-between">
//                   <View className="flex flex-row  items-center">
//                     <MaterialIcons
//                       name="person-outline"
//                       size={24}
//                       color="black"
//                     />
//                     <Text className="font-[400] text-[14px] my-[0.8px] ">
//                       Name
//                     </Text>
//                   </View>

//                   {editMode ? (
//                     <TextInput
//                       value={formData?.firstname}
//                       onChangeText={(text) => handleChange("firstname", text)}
//                     />
//                   ) : (
//                     <Text>{formData?.firstname}</Text>
//                   )}
//                 </View>

//                 <View className="flex flex-row items-center justify-between">
//                   <View className="flex flex-row  items-center gap-1">
//                     <MaterialCommunityIcons
//                       name="email-fast-outline"
//                       size={24}
//                       color="black"
//                     />
//                     <Text className="font-[400] text-[14px] my-[0.8px]">
//                       Email
//                     </Text>
//                   </View>

//                   {editMode ? (
//                     <TextInput
//                       value={formData.email}
//                       onChangeText={(text) => handleChange("email", text)}
//                     />
//                   ) : (
//                     <Text>{formData.email}</Text>
//                   )}
//                 </View>

//                 <View className="flex flex-row items-center justify-between">
//                   <View className="flex flex-row items-center gap-2">
//                     <AntDesign name="phone" size={18} color="black" />
//                     <Text className="font-[400] text-[14px] my-[0.8px]">
//                       Phone
//                     </Text>
//                   </View>
//                   {editMode ? (
//                     <TextInput
//                       value={formData?.contact}
//                       onChangeText={(text) => handleChange("contact", text)}
//                     />
//                   ) : (
//                     <Text>{formData.contact}</Text>
//                   )}
//                 </View>

//                 <View className="flex flex-row items-center justify-between">
//                   <View className="flex flex-row items-center gap-1.5">
//                     <MaterialIcons name="factory" size={18} color="black" />
//                     <Text className="font-[400] text-[14px] my-[0.8px]">
//                       Organisation Name
//                     </Text>
//                   </View>

//                   {editMode ? (
//                     <TextInput
//                       value={formData?.organisationname}
//                       onChangeText={(text) =>
//                         handleChange("organisationname", text)
//                       }
//                     />
//                   ) : (
//                     <Text>{formData?.organisationname}</Text>
//                   )}
//                 </View>

//                 <View className="flex flex-row items-center justify-between">
//                   <View className="flex flex-row items-center gap-1.5">
//                     <MaterialCommunityIcons
//                       name="web"
//                       size={19}
//                       color="black"
//                     />
//                     <Text className="font-[400] text-[14px] my-[0.8px]">
//                       Website
//                     </Text>
//                   </View>
//                   {editMode ? (
//                     <TextInput
//                       value={formData?.website}
//                       onChangeText={(text) => handleChange("website", text)}
//                     />
//                   ) : (
//                     <Text>{formData?.website}</Text>
//                   )}
//                 </View>

//                 <View className="flex flex-row items-center justify-between">
//                   <View className="flex flex-row items-center gap-1.5">
//                     <Ionicons
//                       name="share-social-outline"
//                       size={18}
//                       color="black"
//                     />
//                     <Text className="font-[400] text-[14px] my-[0.8px]">
//                       Social Media
//                     </Text>
//                   </View>
//                   {editMode ? (
//                     <TextInput
//                       value={formData?.socialMedia}
//                       onChangeText={(text) => handleChange("socialMedia", text)}
//                     />
//                   ) : (
//                     <Text>{formData?.socialMedia}</Text>
//                   )}
//                 </View>

//                 <View className="flex flex-row items-center justify-between">
//                   <View className="flex flex-row items-center">
//                     <EvilIcons name="location" size={22} color="black" />
//                     <Text className="font-[400] text-[14px] my-[0.8px]">
//                       Location
//                     </Text>
//                   </View>
//                   {editMode ? (
//                     <TextInput
//                       value={formData?.location}
//                       onChangeText={(text) => handleChange("location", text)}
//                     />
//                   ) : (
//                     <Text>{formData?.location}</Text>
//                   )}
//                 </View>

//                 <View className="flex flex-row items-center justify-between">
//                   <View className="flex flex-row items-center gap-1">
//                     <Entypo name="compass" size={16} color="black" />
//                     <Text className="font-[400] text-[14px] my-[0.8px]">
//                       Company Type
//                     </Text>
//                   </View>
//                   {editMode ? (
//                     <TextInput
//                       value={formData?.industry}
//                       onChangeText={(text) => handleChange("industry", text)}
//                     />
//                   ) : (
//                     <Text>{formData?.industry}</Text>
//                   )}
//                 </View>

//                 <View className="flex flex-row items-center justify-between">
//                   <View className="flex flex-row items-center gap-1">
//                     <SimpleLineIcons
//                       name="size-fullscreen"
//                       size={14}
//                       color="black"
//                     />
//                     <Text className="font-[400] text-[14px] my-[0.8px]">
//                       Company Size
//                     </Text>
//                   </View>
//                   {editMode ? (
//                     <TextInput
//                       value={formData?.companySize}
//                       onChangeText={(text) => handleChange("companySize", text)}
//                     />
//                   ) : (
//                     <Text>{formData?.companySize}</Text>
//                   )}
//                 </View>
//               </View>
//               <View className="px-[25px] py-[15px]">
//                 {editMode ? (
//                   <TouchableOpacity
//                     style={{
//                       backgroundColor: "#4CAF50",
//                       padding: 10,
//                       borderRadius: 5,
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                     onPress={handleSave}
//                   >
//                     <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
//                   </TouchableOpacity>
//                 ) : (
//                   <TouchableOpacity
//                     style={{
//                       backgroundColor: "#4CAF50",
//                       padding: 10,
//                       borderRadius: 5,
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                     onPress={handleEdit}
//                   >
//                     <Text style={{ color: "white", fontSize: 16 }}>Update</Text>
//                   </TouchableOpacity>
//                 )}
//               </View>
//             </View>
//           )}
//         </>
//       )}
//     </ScrollView>
//   );
// };
// export default Profile;
