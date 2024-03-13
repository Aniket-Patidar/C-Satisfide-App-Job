import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import UploadAvatar from "../component/UploadAvatar";
import { avatarStudent, updateStudent } from "../redux/action/studentAction";
import { useDispatch, useSelector } from "react-redux";
import { setError, setUpdateStudent } from "../redux/sclice/studentSclice";

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
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {/* <UploadAvatar
          upload={avatarStudent}
          data={
            <Image
              source={{ uri: student?.avatar.url }}
              style={styles.profileImage}
            />
          }
        /> */}

        <Image
          source={{ uri: student?.avatar.url }}
          style={styles.profileImage}
        />
        <Text style={styles.title}>Profile</Text>
        {editMode ? (
          <View>
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
              onChangeText={(text) => setFormData({ ...formData, email: text })}
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

            <Button onPress={handleSave} title="Save" />
          </View>
        ) : (
          <View>
            <Text style={styles.label}>First Name: {formData.firstname}</Text>
            <Text style={styles.label}>Last Name: {formData.lastname}</Text>
            <Text style={styles.label}>Email: {formData.email}</Text>
            <Text style={styles.label}>Phone Number: {formData.contact}</Text>

            <Button onPress={handleEdit} title="Edit" />
          </View>
        )}
      </View>
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
  profileContainer: {
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
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
