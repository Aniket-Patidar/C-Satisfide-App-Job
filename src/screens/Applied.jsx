import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getApplication } from "../redux/action/studentAction";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ApplicationPage = () => {
  const dispatch = useDispatch();
  const { loading, applications } = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(getApplication());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {loading ? (
        <View className="my-auto flex items-center justify-center w-screen h-screen">
          <ActivityIndicator
            size="large"
            className="-mt-[100px]"
            color="#007AFF"
          />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.jobCardsContainer}
        >
          {applications.map((application, index) => {
            return <JobCard key={index} application={application} />;
          })}
        </ScrollView>
      )}
    </View>
  );
};

const JobCard = ({ application }) => {
  const { jobId, status } = application;

  const getStatusStyle = (status) => {
    switch (status) {
      case "Closed":
        return styles.closedStatus;
      case "Rejected":
        return styles.rejectedStatus;
      case "Accepted":
        return styles.acceptedStatus;
      case "Pending":
        return styles.pendingStatus;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity style={styles.jobCard}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: `${application?.jobId?.employer?.organisationlogo?.url}`,
          }}
          style={styles.logo}
        />
        <View>
          <Text style={styles.jobTitle}>{jobId?.title}</Text>
          <Text style={styles.employer}>{jobId?.employer?.name}</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailContainer}>
          <MaterialIcons
            name="location-on"
            size={windowWidth * 0.04}
            color="#555"
          />
          <Text style={styles.detail} className="capitalize">
            {jobId?.location}
          </Text>
        </View>
        <Text style={styles.detail}>{jobId?.salary}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={[styles.detail, getStatusStyle(status)]}>{status}</Text>
        <View style={styles.jobTypeContainer}>
          <MaterialIcons name="work" size={windowWidth * 0.04} color="#555" />
          <Text style={styles.detail}>{jobId?.jobType}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 20,
  },
  jobCardsContainer: {
    paddingBottom: 20,
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

  closedStatus: {
    color: "#FF4136", // Red color for Closed status
    fontWeight: "bold",
  },
  rejectedStatus: {
    color: "#FF5733", // Custom color for Rejected status
    fontWeight: "bold",
  },
  acceptedStatus: {
    color: "#2ECC40", // Green color for Accepted status
    fontWeight: "bold",
  },
  pendingStatus: {
    color: "#FFC300", // Yellow color for Pending status
    fontWeight: "bold",
  },
});

export default ApplicationPage;
