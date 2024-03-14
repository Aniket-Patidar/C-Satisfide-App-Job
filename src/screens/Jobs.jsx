import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
  StatusBar
  
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



  React.useEffect(() => {
    StatusBar.setBackgroundColor('#4080ED');
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
          <FontAwesome name="filter" size={16} color="gray" />
        </View>
      </View>

      {/* <Image
        source={require("../../assets/banner/Banner1.png")}
        className="h-[83px] w-full"
      ></Image> */}

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

  const scaleAnimation = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleAnimation, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnimation, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  // Function to handle calling HR
  const callHR = () => {
    // Implement your logic to call HR
  };

  return (
    <Animated.View
      style={{
        backgroundColor: "#FFFFFF",
        width: "90%",
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        transform: [{ scale: scaleAnimation }],
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <Image
          source={require("../../assets/Icons/logo.jpg")}
          style={{ width: 35, height: 35, borderRadius: 20, marginRight: 5 }}
        />
        <View>
          <Text
            style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}
            className="capitalize"
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: "#666666",
              textTransform: "capitalize",
            }}
          >
            {employer.organisationname}
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Ionicons name="location-outline" size={14} color="#8A8A8A" />
          <Text style={{ fontSize: 14, color: "#8A8A8A", marginLeft: 5 }}>
            {location}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <MaterialIcons name="attach-money" size={14} color="#8A8A8A" />
          <Text style={{ fontSize: 14, color: "#8A8A8A", marginLeft: 5 }}>
            {salary} / Per Year
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <FontAwesome name="briefcase" size={14} color="#8A8A8A" />
          <Text style={{ fontSize: 14, color: "#8A8A8A", marginLeft: 5 }}>
            {jobType}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Job Details", { id: _id })}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 12, color: "#4080ED", marginRight: 5 }}>
              View Details
            </Text>
            <AntDesign name="arrowright" size={12} color="#4080ED" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={callHR}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <View
            style={{
              backgroundColor: "#2cc57b",
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 5,
            }}
          >
            <Text
              style={{ fontSize: 12, color: "#FFFFFF", fontWeight: "bold" }}
            >
              Call HR
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
