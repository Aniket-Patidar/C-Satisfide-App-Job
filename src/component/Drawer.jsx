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
import COLORS from "../constants/colors";
const Drawer = () => {
  return (
    <View>
      <Text>
        <View
          className={`w-[100%]  -left-3   absolute  -top-2 z-20`}
          style={{ transition: "all 2s ease-in" }}
        >
          <View
            style={{ backgroundColor: `${COLORS.primary}` }}
            className="draw  w-[70%] h-[100vh] rounded-r-xl py-3 px-2 z-25 "
          >
            <View
              className="flex flex-row justify-between "
              style={{ color: `${COLORS.white}` }}
            >
              <Text className="pt-[2px]" style={{ color: `${COLORS.white}` }}>
                <Text className="uppercase font-semibold ">SATISFIED</Text>
                JOB
              </Text>
            </View>
            <View className="flex gap-[20px] py-[40px] px-[5px]">
              <Text style={{ color: `${COLORS.white}` }}>
                <AntDesign name="home" size={18} color="white" />
                {"  "}
                Home
              </Text>
              <Text style={{ color: `${COLORS.white}` }}>
                <FontAwesome5 name="shopping-bag" size={18} color="white" />
                {"  "}
                Jobs
              </Text>
              <Text style={{ color: `${COLORS.white}` }}>
                <MaterialCommunityIcons
                  name="application-braces"
                  size={18}
                  color="white"
                />
                {"  "}
                Applications
              </Text>
              <Text style={{ color: `${COLORS.white}` }}>
                <MaterialCommunityIcons
                  name="face-man-profile"
                  size={18}
                  color="white"
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
      </Text>
    </View>
  );
};

export default Drawer;
