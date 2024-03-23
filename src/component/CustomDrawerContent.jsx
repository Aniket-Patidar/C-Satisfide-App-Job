import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useEmployeeLoggedIn } from "../constants/auth";
import { logoutEmployee } from "../redux/action/employeeAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Loading from "./Loading";

const CustomDrawer = (props) => {
  const dispatch = useDispatch();
  const { employeeLoggedIn, setEmployeeLoggedIn } = useEmployeeLoggedIn();
  const { employee, error, loading } = useSelector((e) => e.employee);
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} className="relative">
        {loading && <Loading />}
        {employee && (
          <View
            source={require("../../assets/banner/profileBg.jpg")}
            style={{ padding: 20 }}
            className="-mt-2 flex items-center justify-center bg-[#4080ED]"
          >
            <Image
              // source={{ uri: employee?.organisationlogo?.url }}
              source={require("../../assets/Images/profile.webp")}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                marginBottom: 1,
              }}
              className="capitalize"
            >
              {employee?.firstname} {employee?.lastname}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "#fff",
                  marginRight: 5,
                }}
                className="text-[12px] opacity-[0.8]"
              >
                {employee?.email}
              </Text>
            </View>
          </View>
        )}

        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>

        <View style={{ padding: 20, paddingTop: 0 }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{ paddingVertical: 15 }}
            className=""
          >
            <View
              style={{ flexDirection: "row", alignItems: "center" }}
              className="space-x-[30px]"
            >
              <Ionicons name="share-social-outline" size={22} />
              <Text
                className="capitalize opacity-[0.5] font-semibold"
                style={{
                  fontSize: 14,
                  marginLeft: 5,
                }}
              >
                Share
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setEmployeeLoggedIn(false);
              dispatch(logoutEmployee());
            }}
            style={{ paddingVertical: 15 }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center" }}
              className="space-x-[30px]"
            >
              <Ionicons name="exit-outline" size={22} />
              <Text
                style={{
                  fontSize: 14,
                  marginLeft: 5,
                }}
                className="capitalize opacity-[0.5] font-semibold"
              >
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}
          className="mt-[10vh]"
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "",
              paddingBottom: 20,
            }}
            className="flex flex-row justify-center mx-auto"
          >
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="logo-facebook"
                size={22}
                color={"#4080ED"}
                style={{ marginHorizontal: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="logo-twitter"
                size={22}
                color={"#4080ED"}
                style={{ marginHorizontal: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="logo-instagram"
                size={22}
                color={"#4080ED"}
                style={{ marginHorizontal: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="logo-linkedin"
                size={22}
                color={"#4080ED"}
                style={{ marginHorizontal: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
