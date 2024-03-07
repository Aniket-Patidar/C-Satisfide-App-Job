import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
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
    <ScrollView>
      <View className="px-2 py-2 flex items-center">
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
        <JobCard {...jobData}></JobCard>
      </View>
    </ScrollView>
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
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text
              style={{ fontSize: 14, fontWeight: "bold" }}
              className="my-1 text-[#484848]"
            >
              {title}
            </Text>
            <Text className="text-[12px] opacity-[.5]">INEXT ETS</Text>
          </View>
          <Image
            source={require("../../assets/google.png")}
            className="w-[22px] h-[22px]"
          />
        </View>
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
            className=""
          >
            <MaterialIcons name="currency-rupee" size={16} color="#8A8A8A" />
            <Text style={{ color: "#8A8A8A", marginLeft: 5 }}>
              {salary} / Per Year
            </Text>
          </View>
          <View
            className=""
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <SimpleLineIcons name="people" size={16} color="#8A8A8A" />
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
          <Text style={{ color: "white", fontSize: 12 }}>Pending</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};