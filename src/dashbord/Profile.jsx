import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../redux/sclice/employeeSclice";
import { avatarEmployee, updateEmployee } from "../redux/action/employeeAction";
import * as ImagePicker from "expo-image-picker";
import UploadAvatar from "../component/UploadAvatar";

const Profile = () => {
  const { employee, error, loading } = useSelector((e) => e.employee);
  
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    organisationname: "",
  });
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (employee) {
      setFormData({
        firstname: employee?.firstname,
        lastname: employee?.lastname,
        email: employee?.email,
        contact: employee?.contact,
        organisationname: employee?.organisationname,
      });
    }
  }, [employee]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    dispatch(updateEmployee(formData));
    setEditMode(false);
  };

  useEffect(() => {
    if (error) {
      ToastAndroid.show(error, ToastAndroid.SHORT);
      dispatch(setError(null));
    }
  }, [error]);


  return (
    <View style={styles.container}>
      {loading && <Text>Loading..</Text>}
      {employee && (
        <>
          <UploadAvatar
            upload={avatarEmployee}
            data={
              <>
                <Image
                  source={{ uri: employee.organisationlogo.url }}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 100,
                    marginBottom: 20,
                  }}
                ></Image>
              </>
            }
          ></UploadAvatar>

          <Text style={styles.title}>Profile</Text>
          {editMode ? (
            <View class="">
              <TextInput
                style={styles.input}
                value={formData.firstname}
                onChangeText={(text) =>
                  setFormData({ ...formData, firstname: text })
                }
                placeholder="First Name"
              />
              <TextInput
                style={styles.input}
                value={formData.lastname}
                onChangeText={(text) =>
                  setFormData({ ...formData, lastname: text })
                }
                placeholder="Last Name"
              />
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, email: text })
                }
                placeholder="Email"
              />
              <TextInput
                style={styles.input}
                value={formData.contact}
                onChangeText={(text) =>
                  setFormData({ ...formData, contact: text })
                }
                placeholder="Phone Number"
              />
              <TextInput
                style={styles.input}
                value={formData.organisationname}
                onChangeText={(text) =>
                  setFormData({ ...formData, organisationname: text })
                }
                placeholder="Organization Name"
              />
              <Button onPress={handleSave} title="Save" />
            </View>
          ) : (
            <View>
              <Text style={styles.label}>First Name: {formData.firstname}</Text>
              <Text style={styles.label}>Last Name: {formData.lastname}</Text>
              <Text style={styles.label}>Email: {formData.email}</Text>
              <Text style={styles.label}>Phone Number: {formData.contact}</Text>
              <Text style={styles.label}>
                Organization Name: {formData.organisationname}
              </Text>
              <Button onPress={handleEdit} title="Edit" />
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // Background color
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 75,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333", // Text color
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 250,
    backgroundColor: "#fff",
    color: "#333",
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    color: "#333",
  },
});

export default Profile;
