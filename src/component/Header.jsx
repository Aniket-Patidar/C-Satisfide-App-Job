import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Header = ({ navigation, isLogin }) => {
  const [showDrawer, setDrawer] = useState(false);
  return (
    <View className="w-[100%] relative px-2 py-2">
      <View className="flex flex-row align-center justify-between h-fit">
        <View className=" flex flex-row align-center justify-center my-auto ">
          <TouchableOpacity onPress={() => setDrawer(!showDrawer)}>
            <Entypo name="menu" size={24} color="black" />
          </TouchableOpacity>
          <Text className="pt-[2px]">
            <Text className="text-[#0B60B0] uppercase font-semibold">
              SATISFIED
            </Text>
            JOB
          </Text>
        </View>
        <View className="flex flex-row w-fit  capitalize">
          {isLogin ? (
            <Image
              className="w-[25px] h-[25px] rounded-full"
              source={require("../../assets/2.webp")}
            ></Image>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={"bg-blue-500 px-4 py-2 rounded"}
            >
              <Text
                style={"text-white font-bold"}
                className="bg-[#0B60B0] text-white px-2 py-1 rounded-md"
              >
                Login
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* {showDrawer && (
      )} */}

      {showDrawer && (
        <View
          className={`w-[100%]  -left-3   absolute  -top-2 z-20`}
          style={{ transition: "all 2s ease-in" }}
        >
          <View className="draw  w-[70%] h-[100vh] bg-[#5794FF] rounded-r-xl py-3 px-2 z-25 ">
            <View className="flex flex-row justify-between ">
              <Text className="pt-[2px] text-white">
                <Text className="uppercase font-semibold ">SATISFIED</Text>
                JOB
              </Text>

              <TouchableOpacity onPress={() => setDrawer(!showDrawer)}>
                <AntDesign
                  name="closecircleo"
                  className="text-white"
                  size={18}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <View className="flex gap-[20px] py-[40px] px-[5px]">
              <Text className="text-white">
                <AntDesign name="home" size={18} color="#dadada" />
                {"  "}
                Home
              </Text>
              <Text className="text-white">
                <FontAwesome5 name="shopping-bag" size={18} color="#dadada" />
                {"  "}
                Jobs
              </Text>
              <Text className="text-white">
                <MaterialCommunityIcons
                  name="application-braces"
                  size={18}
                  color="#dadada"
                />
                {"  "}
                Applications
              </Text>
              <Text className="text-white">
                <MaterialCommunityIcons
                  name="face-man-profile"
                  size={18}
                  color="#dadada"
                />
                {"  "}
                Profile
              </Text>
            </View>
            <View className="absolute z-20 bottom-3 px-2 flex flex-row items-center justify-evenly w-full">
              <TouchableOpacity>
                <AntDesign name="instagram" size={18} color="white" />
              </TouchableOpacity>

              <TouchableOpacity>
                <Feather name="facebook" size={18} color="white" />
              </TouchableOpacity>

              <TouchableOpacity>
                <AntDesign name="twitter" size={18} color="white" />
              </TouchableOpacity>

              <TouchableOpacity>
                <Feather name="linkedin" size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
