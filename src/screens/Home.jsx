import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Header from "../component/Header";
import Container from "../component/Container";
import { MaterialIcons } from "@expo/vector-icons";
import Footer from "../component/Footer";
import { Colors } from "react-native/Libraries/NewAppScreen";
import COLORS from "../constants/colors";
import { EvilIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Loading from "../component/Loading";
import Slider from "../component/Slider";
import axios from "axios";

const Home = ({ navigation }) => {
  const { student, loading } = useSelector((e) => e.student);

  const basePath = "https://final-satisfied-backend-2.onrender.com/user";

  const images = [
    require("../../assets/banner/b3.jpg"),
    require("../../assets/banner/b1.jpg"),
    require("../../assets/banner/b4.jpg"),
  ];

  const [topCompany, setTopCompany] = useState([]);
  const [resentJobs, setResentJobs] = useState([]);

  const fetchTopCompany = async () => {
    try {
      const response = await axios.post(`${basePath}/topcompony`);
      setTopCompany(response.data.jobs);
    } catch (error) {
      ToastAndroid.show("failed to fetch Top Company", ToastAndroid.SHORT);
    }
  };

  const fetchResentJobs = async () => {
    try {
      const response = await axios.post(`${basePath}/resentjobs`);
      setResentJobs(response.data.jobs);
    } catch (error) {
      ToastAndroid.show("failed to fetch resent job", ToastAndroid.SHORT);
    }
  };

  useEffect(() => {
    fetchTopCompany();
    fetchResentJobs();
  }, []);

  return (
    <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={true}>
        {loading ? (
          <Loading />
        ) : (
          <View className="w-[100%]  min-h-[100vh] px-[13px] py-4 bg-white">
            <View className="flex mt-[1px] flex-row items-center justify-between">
              <View>
                <Text
                  className="capitalize text-[13px] opacity-[0.5]"
                  style={{ color: COLORS.grey }}
                >
                  welcome to Job Portal
                </Text>
                <Text className="text-[18px] font-semibold">
                  Discover Jobs 👋
                </Text>
              </View>
              <Image
                source={require("../../assets/hero1.jpg")}
                className="h-[31px] w-[31px] rounded-md"
              ></Image>
            </View>

            <View className="flex flex-row items-center justify-center my-2">
              <Slider images={images} />
            </View>

            <View className="mt-1 font-semibold">
              <View className="flex flex-row py-1 justify-between">
                <Text className="text-[13px] font-[500]">Top Jobs</Text>
                {/* <Text className="text-[11px] opacity-[0.7]">Show more</Text> */}
              </View>
              <ScrollView horizontal={true}>
                <View className="flex flex-row gap-2 py-2 ">
                  {resentJobs?.map((job, index) => {
                    return (
                      <View
                        key={index}
                        className="my-2 py-2 w-[200px] h-[140px] bg-[#2cc57b] rounded-lg overflow-hidden"
                      >
                        <View className="px-2 py-2 flex flex-row items-center ">
                          <Image
                            source={{ uri: job?.organisationlogo?.url }}
                            className="w-[25px] h-[25px] mr-[10px] rounded-md"
                          />
                          <View>
                            <Text className="text-[12px] text-1xl font-semibold text-white">
                              {job.title}
                            </Text>
                            <Text className="text-[11px]  opacity-[.5] text-white">
                              {job.employer.organisationname}
                            </Text>
                          </View>
                        </View>
                        <ScrollView
                          horizontal
                          contentContainerStyle={{
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 2,
                          }}
                          style={{ marginTop: 1 }}
                        >
                          {job.skills.map((skill, skillIndex) => (
                            <Text
                              key={skillIndex}
                              style={{
                                fontSize: 11,
                                color: "white",
                                backgroundColor: "#c7c8cc45",
                                paddingVertical: 4,
                                paddingHorizontal: 10,
                                textAlign: "center",
                                borderRadius: 5,
                                marginHorizontal: 2,
                              }}
                            >
                              {skill.length > 5 ? skill.slice(0, 5) : skill}
                            </Text>
                          ))}
                        </ScrollView>
                        <View className="mt-2 flex flex-row justify-between">
                          <Text className="text-[11px] text-white py-2 px-2">
                            ${job.salary}/year
                          </Text>
                          <Text className="text-[11px] text-white py-2 px-2">
                            {job.location}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </View>

            <View className="mt-1  font-semibold">
              <View className="flex flex-row justify-between py-1 mb-2">
                <Text className="text-[13px] font-[500]">Top Company</Text>
                <Text className="text-[11px] opacity-[0.7]">Show more</Text>
              </View>
              <ScrollView horizontal={true} className="gap-2">
                {topCompany.map((e) => {
                  return (
                    <>
                      <View className="flex flex-row gap-2 py-2">
                        {topCompany.map((job, index) => {
                          const organisationlogo =
                            job.employer.organisationlogo;
                          return (
                            <View
                              key={index}
                              className="w-[130px] h-[150px] bg-[#EBF1FF] rounded-lg flex justify-center items-center mx-2 my-1 space-y-2"
                            >
                              <Image
                                source={{ uri: organisationlogo?.url }}
                                style={{
                                  width: 38,
                                  height: 38,
                                  borderRadius: 19,
                                }}
                              />
                              <View>
                                <Text
                                  style={{ fontSize: 12, fontWeight: "bold" }}
                                  className="mx-auto"
                                >
                                  {job.title}
                                </Text>
                                <Text
                                  style={{ fontSize: 10, opacity: 0.5 }}
                                  className="mx-auto"
                                >
                                  {job.employer.organisationname}
                                </Text>
                              </View>
                              <Text
                                style={{ fontSize: 12, fontWeight: "bold" }}
                              >
                                ${job.salary}/y
                              </Text>
                            </View>
                          );
                        })}
                      </View>
                    </>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;

// bg-[#2ea1e0]
