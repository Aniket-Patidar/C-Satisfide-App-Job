import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
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
  const dispatch = useDispatch();

  console.log(jobs);

  useEffect(() => {
    dispatch(allJobs());
  }, []);

  const jobData = {
    title: "Software Engineer",
    skills: ["JavaScript", "React", "Node.js"],
    employer: { organisationlogo: { url: "../../assets/facbook.webp" } },
    location: "New York",
    jobType: "Full-time",
    salary: 100000,
    openings: 5,
    isAlreadyApplied: false,
    jobId: 1,
  };

  return (
    <ScrollView className="relative">
      <View className="flex items-center px-3 py-3">
        {loading && (
          <>
            <Text>Loading</Text>
          </>
        )}
        {jobs.map((e, i) => {
          return <JobCard {...e}></JobCard>;
        })}
      </View>
    </ScrollView>
  );
};

export default AllJobs;

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
  _id,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        width: "100%",
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
            style={{ width: "40px", height: "40px" }}
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
          <Text
            style={{ color: "white", fontSize: 12 }}
            onPress={() => navigation.navigate("Job Details", { id: _id })}
          >
            Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
