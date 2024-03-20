import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee, avatarEmployee } from "../redux/action/employeeAction";
import { ScrollView } from "react-native-web";

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { employee, loading, error } = useSelector((state) => state.employee);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    organisationname: "",
    organisationlogo: "",
    isAdmin: false,
    resetpasswordToken: "",
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    setFormData({
      firstname: employee.firstname,
      lastname: employee.lastname,
      email: employee.email,
      contact: employee.contact,
      organisationname: employee.organisationname,
      organisationlogo: employee.organisationlogo,
      isAdmin: employee.isAdmin,
      resetpasswordToken: employee.resetpasswordToken,
    });
  }, [employee]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    if (
      formData.firstname.trim() === "" ||
      formData.lastname.trim() === "" ||
      formData.email.trim() === "" ||
      formData.contact.trim() === "" ||
      formData.organisationname.trim() === ""
    ) {
      ToastAndroid.show("All fields are required", ToastAndroid.SHORT);
      return;
    }

    setEditMode(false);
    dispatch(updateEmployee(formData));
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      dispatch(avatarEmployee(result));
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#4080ED" />
      {loading ? (
        <View>
          <Text>Loading....</Text>
        </View>
      ) : (
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <TouchableOpacity
              onPress={pickImage}
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                overflow: "hidden",
              }}
            >
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <Image
                  source={{ uri: employee.organisationlogo.url }}
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }} className="capitalize">
              {formData.firstname} {formData.lastname}
            </Text>
            <Text style={{ fontSize: 14, color: "#666" }}>
              {employee.position} - {employee.department}
            </Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              First Name
            </Text>
            {editMode ? (
              <TextInput
                value={formData.firstname}
                onChangeText={(text) => handleChange("firstname", text)}
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              />
            ) : (
              <Text className="capitalize">{formData.firstname}</Text>
            )}
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              Last Name
            </Text>
            {editMode ? (
              <TextInput
                value={formData.lastname}
                onChangeText={(text) => handleChange("lastname", text)}
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              />
            ) : (
              <Text className="capitalize">{formData.lastname}</Text>
            )}
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              Email
            </Text>
            {editMode ? (
              <TextInput
                value={formData.email}
                onChangeText={(text) => handleChange("email", text)}
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              />
            ) : (
              <Text >{formData.email}</Text>
            )}
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              Phone
            </Text>
            {editMode ? (
              <TextInput
                value={formData.contact}
                onChangeText={(text) => handleChange("contact", text)}
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              />
            ) : (
              <Text>{formData.contact}</Text>
            )}
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              Organisation Name
            </Text>
            {editMode ? (
              <TextInput
                value={formData.organisationname}
                onChangeText={(text) => handleChange("organisationname", text)}
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              />
            ) : (
              <Text className="capitalize">{formData.organisationname}</Text>
            )}
          </View>
          {editMode ? (
            <TouchableOpacity
              onPress={handleSave}
              style={{
                backgroundColor: "#4080ED",
                padding: 10,
                borderRadius: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Save Changes</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={handleEdit}
              style={{
                backgroundColor: "#4080ED",
                padding: 10,
                borderRadius: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Edit Profile</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default Profile;
