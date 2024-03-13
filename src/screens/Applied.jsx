import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Feather";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Applied = ({ navigation }) => {
  const jobData = {
    title: "Software Engineer",
    skills: ["JavaScript", "React", "Node.js"],
    employer: { organisationlogo: { url: "https://example.com/logo1.png" } },
    location: "New York",
    jobType: "Full-time",
    salary: 100000,
    openings: 5,
    isAlreadyApplied: false,
    jobId: 1,
    navigation,
  };

  return (
    <View className="bg-[#F7F7F7] px-[20px] overflow-hidden">
      <View className=" pt-[18px] my-1">
        <Text className="text-[18px] my-1  font-semibold text-center">
          👋 You Have 27 Applications
        </Text>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        <View style={styles.textContainer} className="flex flex-row gap-2">
          <Text style={styles.text}>All</Text>
          <Text style={[styles.text, styles.activeText]}>Pending</Text>
          <Text style={styles.text}>Reject</Text>
          <Text style={styles.text}>Accepted</Text>
        </View>
      </ScrollView>

      <View className="flex items-center">
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
      </View>
    </View>
  );
};

export default Applied;

const JobCard = ({
  title,
  skills,
  employer,
  location,
  jobType,
  salary,
  openings,
  isAlreadyApplied,
  jobId,
  navigation,
}) => {
  return (
    <View className="text-black  py-[20px] px-[12px] rounded-md space-y-2 bg-white my-2">
      <View className="flex flex-row justify-between  w-full">
        <View className="flex flex-row gap-2">
          <Image
            source={require("../../assets/Images/facebook.png")}
            className="w-[32px] h-[32px]"
          ></Image>
          <View>
            <Text className="font-[500] text-[13px]">UX Inter</Text>
            <Text className="opacity-[0.5] text-[11px]">Google</Text>
          </View>
        </View>

        <View className="text-black">
          <Text className="text-black font-[500] text-[11px]">$88,000/y</Text>
          <Text className="opacity-[0.5] text-[11px] text-right">
            Bhopal,M.P
          </Text>
        </View>
      </View>
      <View className="flex flex-row justify-between py-1">
        <Text className="bg-[#FFEDED]  text-[#E45A57] px-[15px] py-[3px] rounded-full text-[10px] font-semibold">
          Closed
        </Text>
        <Text className="font-[500] text-[12px] ">Full-Time</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  text: {
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 20, // Adjust the border radius to make it perfectly round
    borderColor: "#C6C6C6", // Border color
    backgroundColor: "transparent", // Background color
    overflow: "hidden",
    fontWeight: 400,
    color: "black",
  },
  activeText: {
    // backgroundColor: "#007bff", // Active background color
    color: "black", // Active text color
  },
});
