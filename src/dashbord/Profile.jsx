import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    organisationName: 'Example Inc.',
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    // You can perform save operation here, like updating data in the database
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/hero3.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.title}>Profile</Text>
      {editMode ? (
        <View class="">
          <TextInput
            style={styles.input}
            value={formData.firstName}
            onChangeText={(text) => setFormData({...formData, firstName: text})}
            placeholder="First Name"
          />
          <TextInput
            style={styles.input}
            value={formData.lastName}
            onChangeText={(text) => setFormData({...formData, lastName: text})}
            placeholder="Last Name"
          />
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => setFormData({...formData, email: text})}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            value={formData.phoneNumber}
            onChangeText={(text) => setFormData({...formData, phoneNumber: text})}
            placeholder="Phone Number"
          />
          <TextInput
            style={styles.input}
            value={formData.organisationName}
            onChangeText={(text) => setFormData({...formData, organisationName: text})}
            placeholder="Organization Name"
          />
          <Button onPress={handleSave} title="Save" />
        </View>
      ) : (
        <View>
          <Text style={styles.label}>First Name: {formData.firstName}</Text>
          <Text style={styles.label}>Last Name: {formData.lastName}</Text>
          <Text style={styles.label}>Email: {formData.email}</Text>
          <Text style={styles.label}>Phone Number: {formData.phoneNumber}</Text>
          <Text style={styles.label}>Organization Name: {formData.organisationName}</Text>
          <Button onPress={handleEdit} title="Edit" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 75,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', // Text color
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 250,
    backgroundColor: '#fff',
    color: '#333', 
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    color: '#333', 
  },
});

export default Profile;
