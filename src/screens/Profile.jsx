// Import necessary modules from React
import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

// Define the JobSeekerProfile component
const JobSeekerProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/hero2.jpg")}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
        <Text style={styles.phone}>123-456-7890</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.skills}>JavaScript, React Native, Node.js</Text>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.education}>
          Bachelor's in Computer Science - XYZ University
        </Text>
        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.experience}>
          2 years as a React Native Developer at ABC Company
        </Text>
        <TouchableOpacity style={styles.button} className="bg-[#2ea1e0] py-2 rounded-md">
          <Text style={styles.buttonText} className="text-center text-white font-semibold ">
            Create Resume
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Define styles using Tailwind CSS classes
const styles = {
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    marginBottom: 5,
  },
  phone: {
    fontSize: 13,
    marginBottom: 10,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  skills: {
    fontSize: 13,
    marginBottom: 10,
  },
  education: {
    fontSize: 13,
    marginBottom: 10,
  },
  experience: {
    fontSize: 13,
    marginBottom: 10,
  },
};

// Export the JobSeekerProfile component
export default JobSeekerProfile;
