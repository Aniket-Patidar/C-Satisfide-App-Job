import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
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

const Home = ({ navigation }) => {
  useEffect(() => {
    navigation.navigate("Details");
  }, []);

  return (
    <View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={true}>
        <View className="w-[100%]  min-h-[100vh] px-[13px] py-2 bg-white">
          {/* header */}
          <View className="flex flex-row items-center justify-between">
            <View>
              <Text className={``} style={{ color: COLORS.grey }}>
                welcome to Job Portal
              </Text>
              <Text className="text-[16px] font-semibold">
                Discover Jobs 👋
              </Text>
            </View>
            <Image
              source={require("../../assets/hero3.jpg")}
              className="h-[30px] w-[30px] rounded-sm"
            ></Image>
          </View>

          {/* banner */}
          <Image
            source={require("../../assets/banner.png")}
            className="h-[82px] my-[20px]  w-full object-cover object-center"
          ></Image>

          {/* Search */}
          <View
            className={`w-[100%] h-[30px] bg-gray-100  rounded-md flex flex-row items-center justify-start pl-1`}
          >
            <EvilIcons className="mx-2" name="search" size={20} color="black" />
            <TextInput placeholder="search your dream job"></TextInput>
          </View>

          {/* cards */}
          <View className="mt-2  font-semibold">
            <Text className="text-[13px] font-[500]">Top Jobs</Text>
            <ScrollView horizontal={true}>
              <View className="flex flex-row gap-2 py-2">
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
              </View>
            </ScrollView>
          </View>

          {/* cards */}
          <View className="my-1  font-semibold">
            <Text className="text-[13px] font-[500]">Popular Company </Text>
            <ScrollView horizontal={true}>
              <View className="flex flex-row gap-2 py-2">
                <View className="my-2 py-2 w-[200px] h-[140px] bg-[#2ea1e0] rounded-lg">
                  <View className="px-2 py-2 flex flex-row items-center ">
                    <Image
                      source={require("../../assets/goole2.webp")}
                      className="w-[25px] h-[25px] mr-[10px] rounded-md"
                    ></Image>
                    <View>
                      <Text className="text-[12px] text-1xl font-semibold text-white">
                        Google
                      </Text>
                      <Text className="text-[11px]  opacity-[.5] text-white">
                        googleImage.co
                      </Text>
                    </View>
                  </View>
                  <View className="px-2 mt-1 flex flex-row space-x-1">
                    <Text className="text-[11px] text-white bg-[#c7c8cc45] min-w-[50px] py-1 text-center rounded-md">
                      Work
                    </Text>
                    <Text className="text-[11px] text-white bg-[#c7c8cc45] min-w-[50px] py-1 text-center rounded-md">
                      With
                    </Text>
                    <Text className="text-[11px] text-white bg-[#c7c8cc45] min-w-[60px] py-1 text-center rounded-md">
                      Us
                    </Text>
                  </View>
                  <View className="mt-2 flex flex-row justify-between">
                    <Text className="text-[11px] text-white py-2 px-2">
                      50 year old
                    </Text>
                    <Text className="text-[11px] text-white py-2 px-2">
                      new york
                    </Text>
                  </View>
                </View>

                <View className="my-2 py-2 w-[200px] h-[140px] bg-[#2cc57b] rounded-lg">
                  <View className="px-2 py-2 flex flex-row items-center ">
                    <Image
                      source={require("../../assets/facbook.webp")}
                      className="w-[25px] h-[25px] mr-[10px] rounded-md"
                    ></Image>
                    <View>
                      <Text className="text-[12px] text-1xl font-semibold text-white">
                        Google
                      </Text>
                      <Text className="text-[11px]  opacity-[.5] text-white">
                        googleImage.co
                      </Text>
                    </View>
                  </View>
                  <View className="px-2 mt-1 flex flex-row space-x-1">
                    <Text className="text-[11px] text-white bg-[#c7c8cc45] min-w-[50px] py-1 text-center rounded-md">
                      Work
                    </Text>
                    <Text className="text-[11px] text-white bg-[#c7c8cc45] min-w-[50px] py-1 text-center rounded-md">
                      With
                    </Text>
                    <Text className="text-[11px] text-white bg-[#c7c8cc45] min-w-[60px] py-1 text-center rounded-md">
                      Us
                    </Text>
                  </View>
                  <View className="mt-2 flex flex-row justify-between">
                    <Text className="text-[11px] text-white py-2 px-2">
                      40 year old
                    </Text>
                    <Text className="text-[11px] text-white py-2 px-2">
                      new york
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
