import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { allJobs, error, loading } = useSelector((e) => e.student);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    skills: "",
    inOffice: false,
    remote: false,
    internship: false,
    salary: "",
  });

  useEffect(() => {
    dispatch(AllJobs());
  }, []);

  const handelSubmit = () => {
    dispatch(AllJobs(formData));
    toggleDrawer();
    setFormData({});
  };

  return (
    <ScrollView className="relative">
      {loading ? (
        <Loading />
      ) : (
        <>
          <View>
            <CoolDrawer
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
              toggleDrawer={toggleDrawer}
              formData={formData}
              setFormData={setFormData}
              handelSubmit={handelSubmit}
            />
          </View>

          <View
            className={`h-[30px]   my-[10px] rounded-md flex flex-row  space-x-1 px-[10px]  items-center justify-start`}
          >
            <TouchableOpacity
              onPress={handelSubmit}
              className="flex flex-row items-center w-[87.5%] min-h-[30px] rounded-md justify-start  px-1 bg-white"
            >
              <EvilIcons
                className="mx-2 px-3 font-semibold"
                name="search"
                size={20}
                color="gray"
              />
              <TextInput
                className="text-[11px]"
                placeholder="Search your dream job"
                value={formData.title}
                onChangeText={(text) => handleInputChange("title", text)}
              ></TextInput>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={toggleDrawer}
              className="w-[30px] flex items-center justify-center
             h-[30px] bg-white  opacity-[0.5] rounded-md"
            >
              <AntDesign name="filter" size={15} color="#008BDC" />
            </TouchableOpacity>
          </View>

          <View className="flex flex-row items-center justify-center">
            <Image
              source={require("../../assets/banner/b2.jpg")}
              className="w-[94vw] h-[100px] "
            ></Image>
          </View>

          <View className="flex items-center my-[12px]">
            {allJobs &&
              allJobs?.map((e) => {
                return <JobCard {...e}></JobCard>;
              })}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default Jobs;

import * as Linking from "expo-linking";
import Loading from "../component/Loading";

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
  applications,
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

  const callHR = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
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
      <View className="flex flex-row justify-between">
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
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

        {applications.length > 0 && (
          <Text className="text-[#4080ED]">+{applications.length}</Text>
        )}
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
          <Text
            style={{ fontSize: 14, color: "#8A8A8A", marginLeft: 5 }}
            className="capitalize"
          >
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
          onPress={() => callHR(employer?.contact)}
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
