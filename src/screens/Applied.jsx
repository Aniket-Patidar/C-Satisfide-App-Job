import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ApplicationPage = () => {
  const jobData = {
    title: "Software Engineer",
    employer: "Google",
    location: "New York",
    jobType: "Full-time",
    salary: "$100,000",
    status: "Closed",
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Your Job Applications</Text> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.jobCardsContainer}
      >
        {[...Array(10)].map((_, index) => (
          <JobCard key={index} {...jobData} />
        ))}
      </ScrollView>
    </View>
  );
};

const JobCard = ({ title, employer, location, jobType, salary, status }) => {
  return (
    <TouchableOpacity style={styles.jobCard}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/Images/facebook.png")}
          style={styles.logo}
        />
        <View>
          <Text style={styles.jobTitle}>{title}</Text>
          <Text style={styles.employer}>{employer}</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailContainer}>
          <MaterialIcons
            name="location-on"
            size={windowWidth * 0.04}
            color="#555"
          />
          <Text style={styles.detail}>{location}</Text>
        </View>
        <Text style={styles.detail}>{salary}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text
          style={[
            styles.detail,
            status === "Closed" ? styles.closedStatus : null,
          ]}
        >
          {status}
        </Text>
        <View style={styles.jobTypeContainer}>
          <MaterialIcons name="work" size={windowWidth * 0.04} color="#555" />
          <Text style={styles.detail}>{jobType}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ApplicationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 20,
  },
  header: {
    fontSize: windowWidth * 0.06,
    fontWeight: "bold",
    marginBottom: windowHeight * 0.02,
    textAlign: "center",
    color: "#333",
  },
  jobCardsContainer: {
    flex: 1,
  },
  jobCard: {
    backgroundColor: "#FFF",
    borderRadius: windowWidth * 0.04,
    padding: windowWidth * 0.05,
    marginBottom: windowHeight * 0.03,
    elevation: 3,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: windowHeight * 0.015,
  },
  logo: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: windowWidth * 0.06,
    marginRight: windowWidth * 0.04,
  },
  jobTitle: {
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
    color: "#333",
  },
  employer: {
    fontSize: windowWidth * 0.035,
    color: "#888",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: windowHeight * 0.015,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detail: {
    fontSize: windowWidth * 0.04,
    color: "#555",
    marginLeft: windowWidth * 0.02,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closedStatus: {
    color: "#FF4136",
    fontWeight: "bold",
  },
  jobTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
