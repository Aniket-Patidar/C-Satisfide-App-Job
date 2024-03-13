import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CoolDrawer from "../component/DrawerFilter";
import { useDispatch, useSelector } from "react-redux";
import { AllJobs } from "../redux/action/studentAction";
import { useNavigation } from "@react-navigation/native";

const Jobs = ({ navigation }) => {
  const dispatch = useDispatch();

  const { allJobs, error } = useSelector((e) => e.student);
  useEffect(() => {
    dispatch(AllJobs());
  }, []);

  return (
    <ScrollView className="relative">
      {/* <View>
        
        <CoolDrawer />
      </View> */}

      <View
        className={`h-[30px]   my-[10px] rounded-md flex flex-row  space-x-1 px-[10px]  items-center justify-start`}
      >
        <View className="flex flex-row items-center w-[87.5%] min-h-[30px] rounded-md justify-start  px-1 bg-white">
          <EvilIcons
            className="mx-2 px-3 font-semibold"
            name="search"
            size={20}
            color="gray"
          />
          <TextInput
            className="text-[11px]"
            placeholder="Search your dream job"
          ></TextInput>
        </View>

        <View
          className="w-[30px] flex items-center justify-center
             h-[30px] bg-white  opacity-[0.5] rounded-md"
        >
          <FontAwesome name="filter" size={16} color="black" />
        </View>
      </View>

      <Image
        source={require("../../assets/banner/Banner1.png")}
        className="h-[83px] w-full"
      ></Image>

      <View className="flex items-center my-[12px]">
        {allJobs &&
          allJobs.map((e) => {
            return <JobCard {...e}></JobCard>;
          })}
      </View>
    </ScrollView>
  );
};

export default Jobs;

const JobCard = ({
  _id,
  title,
  skills,
  employer,
  location,
  jobType,
  salary,
  openings,
  isAlreadyApplied,
  jobId,
}) => {
  const navigation = useNavigation();
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
            <Text className="text-[12px] opacity-[.5]">
              {employer.organisationname}
            </Text>
          </View>
          <Image
            // source={{ uri: `${employer?.organisationlogo.url}` }}
            source={require("../../assets/Images/google.png")}
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
          {/* <View
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
          </View> */}
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
          {/* <View
            className=""
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <SimpleLineIcons name="people" size={16} color="#8A8A8A" />
            <Text style={{ color: "#8A8A8A", marginLeft: 5 }}>
              {openings} Openings
            </Text>
          </View> */}
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Job Details", { id: _id })}
          >
            <View className="flex flex-row items-center">
              <Text className="text-[12px] text-[#2ea1e0] pr-1">
                View Details
              </Text>
              <AntDesign name="arrowright" size={12} color="#2ea1e0" />
            </View>
          </TouchableOpacity>
        </View>

    
      </View>
    </View>
  );
};
