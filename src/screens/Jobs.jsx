import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CoolDrawer from "../component/DrawerFilter";

const Jobs = ({ navigation }) => {
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
    navigation
  };

  return (
    <ScrollView className="relative">
      <Image
        source={require("../../assets/jobBanner.jpg")}
        className="h-[83px] w-full "
      ></Image>
      <CoolDrawer />
      <View className="flex items-center">
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
      </View>
    </ScrollView>
  );
};

export default Jobs;

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
  navigation
}) => {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        width: "95%",
        padding: 20,
        borderRadius: 2,
        marginBottom: 10,
      }}
      className="rounded-lg shadow-lg"
    >
      <View
        style={{
          flexDirection: "col",
          alignItems: "start",
          justifyContent: "start",
          marginBottom: 10,
        }}
      >
        <View className=" border-[#c7c4c4] w-[34%] border-[1px] rounded-sm flex items-center px-1 py-[2px]">
          <Text className="text-[10px] text-[#5794FF]">Actively hiring</Text>
        </View>
        <Text
          style={{ fontSize: 14, fontWeight: "bold" }}
          className="my-1 text-[#484848]"
        >
          {title}
        </Text>
        <Text className="text-[12px] opacity-[.5]">INEXT ETS</Text>
        <Image source={{ uri: "../.../../../assets/2.webp" }} />
      </View>

      <View style={{ marginBottom: 0 }}>
        <View
          style={{
            flexDirection: "col",
            justifyContent: "",
            marginBottom: 0,
          }}
          className="flex gap-2 justify-start items-start"
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Ionicons name="location-outline" size={16} color="#8A8A8A" />
            <Text
              style={{
                textTransform: "capitalize",
                color: "#8A8A8A",
                marginLeft: 5,
              }}
            >
              {location}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <MaterialCommunityIcons
              name="progress-clock"
              size={16}
              color="#8A8A8A"
            />
            <Text style={{ color: "#8A8A8A", marginLeft: 5 }}>{jobType}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
            className="px-1"
          >
            <FontAwesome className="" name="rupee" size={16} color="#8A8A8A" />
            <Text style={{ color: "#8A8A8A", marginLeft: 5 }}>
              {salary} / Per Year
            </Text>
          </View>
          <View
            className="px-1"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <FontAwesome name="shopping-bag" size={16} color="#8A8A8A" />
            <Text style={{ color: "#8A8A8A", marginLeft: 5 }}>
              {openings} Openings
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {/* {isAlreadyApplied ? (
          <Text>Applied</Text>
        ) : (
          <TouchableOpacity
            onPress={() => console.log("Applied for job", jobId)}
            style={{
              borderWidth: 2,
              borderColor: "#5794FF",
              paddingVertical: 4,
              paddingHorizontal: 8,
              borderRadius: 4,
            }}
          >
            <Text style={{ color: "#5794FF", fontSize: 14 }}>Apply</Text>
          </TouchableOpacity>
        )} */}

        <TouchableOpacity
          onPress={() => navigation.navigate("Details")}
          style={{
            borderWidth: 1,
            borderColor: "#5794FF",
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 4,
            marginLeft: 10,
          }}
          className="bg-[#008BDC]"
        >
          <Text style={{ color: "white", fontSize: 12 }}>View details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
