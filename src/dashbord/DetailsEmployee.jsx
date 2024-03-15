import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import Header from "../component/Header";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getJobById } from "../redux/action/jobAction";
import { useRoute } from "@react-navigation/native";

const Details = ({}) => {
  const { jobs, job, loading, error } = useSelector((e) => e.Jobs);
  const { student } = useSelector((e) => e.student);

  const dispatch = useDispatch();
  const route = useRoute();
  const { id } = route.params;

  useEffect(() => {
    dispatch(getJobById(id));
  }, []);
  return (
    <View className="bg-white">
      {loading ? (
        <View className="my-auto flex items-center justify-center w-screen h-screen">
          <ActivityIndicator
            size="large"
            className="-mt-[100px]"
            color="#007AFF"
          />
        </View>
      ) : (
        <>
          <View className="w-full h-[35vh] rounded-b-[28px] flex items-center justify-center bg-[#4080ED] space-y-1">
            <Image
              source={require("../../assets/Images/goole.webp")}
              className="h-[60px] w-[60px] mx-auto  rounded-full"
            ></Image>
            <Text className="text-white text-md  font-semibold">
              Product Designer
            </Text>
            <Text className="text-white text-1xl opacity-[0.8]">Google</Text>
            <View className="flex flex-row  justify-center w-full gap-3">
              <Text className="bg-[#ffffff61]  text-[12px] px-[10px] py-[3px] rounded-md text-white">
                Design
              </Text>

              <Text className="bg-[#ffffff61]  text-[12px] px-[10px] py-[3px] rounded-md text-white">
                Design
              </Text>

              <Text className="bg-[#ffffff61]  text-[12px] px-[10px] py-[3px] rounded-md text-white">
                Design
              </Text>
            </View>
            <View className="flex flex-row justify-center space-x-5 w-full px-[20px] py-[10px]">
              <Text className="text-white font-semibold">$160,00/year</Text>
              <Text className="text-white font-semibold">California,USA</Text>
            </View>
          </View>

          <View className="flex flex-row justify-evenly pt-2">
            <Text className="opacity-[0.5]">About</Text>
            <Text className="opacity-[0.5]">Description</Text>
            <Text className="opacity-[0.5]">Review</Text>
            <Text className="opacity-[0.5]">Hr</Text>
          </View>

          <ScrollView className="h-[51vh] bg-white">
            {job && <JobCard {...job}></JobCard>}
          </ScrollView>
          {student && (
            <View className="w-[90vw]  mx-auto mb-5 h-[50px] flex items-center justify-center rounded-xl bg-[#4080ED] fixed">
              <Text className="text-white font-semibold">Apply Now</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default Details;

const JobCard = ({
  title,
  skills,
  employer,
  location,
  jobType,
  salary,
  openings,
  jobId,
  navigation,
  description,
  preferences,
  organisationname,
  category,
}) => {
  const { student } = useSelector((e) => e.student);

  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        padding: 10,
        borderRadius: 2,
        marginBottom: 20,
      }}
      className="px-[25px]"
    >
      <About
        title={title}
        location={location}
        jobType={jobType}
        salary={salary}
        openings={openings}
        skills={skills}
        organisationname={organisationname}
        category={category}
      />
    </View>
  );
};

function About({
  title,
  location,
  jobType,
  salary,
  openings,
  category,
  skills,
  employer,
  organisationname,
}) {
  return (
    <>
      <View
        style={{
          flexDirection: "col",
          alignItems: "start",
          justifyContent: "start",
        }}
        className="my-[10px] text-center mx-auto"
      >
        <Text
          style={{ fontSize: 14, fontWeight: "bold" }}
          className="my-1 text-[#484848]"
        >
          {title}
        </Text>
        <Text className="text-[12px] opacity-[.5] mx-auto">
          {organisationname}
        </Text>
        <Image source={{ uri: "../.../../../assets/2.webp" }} />
      </View>

      <Text className="font-semibold mb-[10px]">Details</Text>

      <View
        style={{
          flexDirection: "col",
          justifyContent: "",
          marginBottom: 5,
        }}
        className="flex space-y-3"
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
          <Text style={{ color: "#8A8A8A", marginLeft: 4 }}>{jobType}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
          className="pl-1"
        >
          <FontAwesome
            className="ml-[15px]"
            name="rupee"
            size={16}
            color="#8A8A8A"
          />
          <Text style={{ color: "#8A8A8A", marginLeft: 4 }}>
            {salary} / Per Year
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* <FontAwesome name="shopping-bag" size={14} color="#8A8A8A" /> */}
          <Text style={{ color: "#8A8A8A", marginLeft: 5 }}>{category}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="shopping-bag" size={14} color="#8A8A8A" />
          <Text style={{ color: "#8A8A8A", marginLeft: 5 }}>
            {openings} Openings
          </Text>
        </View>

        {/* skills */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text className="font-semibold mb-[1px]">Skills:</Text>
          {skills.map((e) => {
            return (
              <Text style={{ color: "#8A8A8A", marginLeft: 5 }} className="capitalize">
                {e} 
              </Text>
            );
          })}
        </View>
      </View>
    </>
  );
}

function Description() {
  return (
    <>
      <View className="my-1">
        <Text className="text-md">Description</Text>
        <Text className="text-[12px] mt-1 font-light">{description}</Text>
        <Text className="text-md">Preferences</Text>
        <Text className="text-[12px] mt-1 font-light">{preferences}</Text>
      </View>
    </>
  );
}

function HR() {
  return <></>;
}

function Review() {
  return <></>;
}
