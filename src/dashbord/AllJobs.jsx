import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { allJobs } from "../redux/action/jobAction";
const AllJobs = ({ navigate }) => {
  const { jobs, loading, error } = useSelector((e) => e.Jobs);
  const { employee } = useSelector((e) => e.employee);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allJobs());
  }, []);

  const images = [
    require("../../assets/banner/b3.jpg"),
    require("../../assets/banner/b1.jpg"),
    require("../../assets/banner/b4.jpg"),
  ];

  return (
    <ScrollView className="relative">
      <View className="flex flex-row items-center justify-center px-[13px] mt-[10px]">
        <Slider images={images} />
      </View>

      <View className="flex items-center  py-3">
        {loading ? (
          <Loading />
        ) : (
          jobs?.map((e, i) => {
            return <JobCard {...e}></JobCard>;
          })
        )}
      </View>
    </ScrollView>
  );
};

export default AllJobs;

import * as Linking from "expo-linking";
import Loading from "../component/Loading";
import Slider from "../component/Slider";

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
          onPress={() => navigation.navigate("EditEmployeeJob", { id: _id })}
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
              Edit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
