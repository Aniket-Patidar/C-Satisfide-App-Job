import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
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

const Home = ({ navigation }) => {
  const { student } = useSelector((e) => e.student);
  return (
    <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={true}>
        <Image
          source={require("../../assets/banner/1.png")}
          className="w-[100vw] h-[150px] "
        ></Image>
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

          <View
            className={`h-[30px] my-[20px]  mt-[20px] rounded-md flex flex-row  space-x-1 items-center justify-start flex-row-reverse space-x-1`}
          >
            <View className="flex flex-row items-center w-[87.5%] min-h-[30px] rounded-md justify-start  px-1 bg-gray-100">
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
              className="w-[30px] max-h-[30px] bg-gray-200  mr-1 flex items-center justify-center
             h-[50px]  opacity-[0.5] rounded-md"
            >
              <MaterialCommunityIcons
                name="menu-open"
                size={24}
                color="black"
              />
            </View>
          </View>

          <View className="mt-1 font-semibold">
            <View className="flex flex-row py-1 justify-between">
              <Text className="text-[13px] font-[500]">Top Jobs</Text>
              <Text className="text-[11px] opacity-[0.7]">Show more</Text>
            </View>
            <ScrollView horizontal={true}>
              <View className="flex flex-row gap-2 py-2">
                <View className="my-2 py-2 w-[200px] h-[140px] bg-[#2cc57b] rounded-lg">
                  <View className="px-2 py-2 flex flex-row items-center ">
                    <Image
                      source={require("../../assets/goole2.webp")}
                      className="w-[25px] h-[25px] mr-[10px] rounded-md"
                    ></Image>
                    <View>
                      <Text className="text-[12px] text-1xl font-semibold text-white">
                        Mern Web Developer
                      </Text>
                      <Text className="text-[11px]  opacity-[.5] text-white">
                        Google
                      </Text>
                    </View>
                  </View>
                  <View className="px-2 mt-1 flex flex-row space-x-1">
                    <Text className="text-[11px] text-white bg-[#c7c8cc45] min-w-[50px] py-1 text-center rounded-md">
                      HTML
                    </Text>
                    <Text className="text-[11px] text-white bg-[#c7c8cc45] min-w-[50px] py-1 text-center rounded-md">
                      CSS
                    </Text>
                    <Text className="text-[11px] text-white bg-[#c7c8cc45] min-w-[60px] py-1 text-center rounded-md">
                      JavaScript
                    </Text>
                  </View>
                  <View className="mt-2 flex flex-row justify-between">
                    <Text className="text-[11px] text-white py-2 px-2">
                      $98000/year
                    </Text>
                    <Text className="text-[11px] text-white py-2 px-2">
                      Sironj M.P
                    </Text>
                  </View>
                </View>

                <View className="my-2 py-2 w-[200px] h-[140px] bg-[#2ea1e0] rounded-lg">
                  <View className="px-2 py-2 flex flex-row items-center ">
                    <Image
                      source={require("../../assets/facbook.webp")}
                      className="w-[25px] h-[25px] mr-[10px] rounded-md"
                    ></Image>
                    <View>
                      <Text className="text-[12px] text-1xl font-semibold text-white">
                        Mern Web Developer
                      </Text>
                      <Text className="text-[11px]  opacity-[.5] text-white">
                        Facebook
                      </Text>
                    </View>
                  </View>
                  <View className="px-2 mt-1 flex flex-row space-x-1">
                    <Text className="text-[11px] text-white bg-[#c7c8cc45] min-w-[50px] py-1 text-center rounded-md">
                      HTML
                    </Text>
                    <Text className="text-[11px] text-white bg-[#c7c8cc45] min-w-[50px] py-1 text-center rounded-md">
                      CSS
                    </Text>
                    <Text className="text-[11px] text-white bg-[#c7c8cc45] min-w-[60px] py-1 text-center rounded-md">
                      JavaScript
                    </Text>
                  </View>
                  <View className="mt-2 flex flex-row justify-between">
                    <Text className="text-[11px] text-white py-2 px-2">
                      $98000/year
                    </Text>
                    <Text className="text-[11px] text-white py-2 px-2">
                      Sironj M.P
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>

          <View className="mt-1  font-semibold">
            <View className="flex flex-row justify-between py-1 mb-2">
              <Text className="text-[13px] font-[500]">Top Company</Text>
              <Text className="text-[11px] opacity-[0.7]">Show more</Text>
            </View>
            <ScrollView horizontal={true} className="gap-2">
              <View className="w-[130px] h-[150px] bg-[#EBF1FF] rounded-lg flex justify-center items-center space-y-2">
                <Image
                  source={require("../../assets/Images/facebook.png")}
                  className="w-[38px] h-[38px] rounded-md mx-auto"
                ></Image>
                <View className="text-center">
                  <Text className="text-[12px] font-semibold">UX Designer</Text>
                  <Text className="text-[10px] mx-auto opacity-[0.5]">
                    facebook
                  </Text>
                </View>
                <Text className="text-[12px] font-semibold">$80,000/y</Text>
              </View>

              <View className="w-[130px] h-[150px] bg-[#d7f8e0] rounded-lg flex justify-center items-center space-y-2">
                <Image
                  source={require("../../assets/Images/google.png")}
                  className="w-[36px] h-[36px] rounded-md mx-auto"
                ></Image>
                <View className="text-center">
                  <Text className="text-[12px] font-semibold">UX Designer</Text>
                  <Text className="text-[10px] mx-auto opacity-[0.5]">
                    Google
                  </Text>
                </View>
                <Text className="text-[12px] font-semibold">$98,000/y</Text>
              </View>

              <View className="w-[130px] h-[150px] bg-[#EBF1FF] rounded-lg flex justify-center items-center space-y-2">
                <Image
                  source={require("../../assets/Images/facebook.png")}
                  className="w-[38px] h-[38px] rounded-md mx-auto"
                ></Image>
                <View className="text-center">
                  <Text className="text-[12px] font-semibold">UX Designer</Text>
                  <Text className="text-[10px] mx-1 opacity-[0.5]">
                    UX Designer
                  </Text>
                </View>
                <Text className="text-[12px] font-semibold">$80,000/y</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
