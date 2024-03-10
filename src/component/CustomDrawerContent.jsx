import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
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

const CustomDrawer = (props) => {
  const dispatch = useDispatch();
  const { employeeLoggedIn, setEmployeeLoggedIn } = useEmployeeLoggedIn();
  const { employee, error, loading } = useSelector((e) => e.employee);
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        {loading && <Text>Loading..</Text>}
        {employee && (
          <ImageBackground
            source={require("../../assets/menu-bg.jpg")}
            style={{ padding: 20 }}
          >
            <Image
              source={{ uri: employee?.organisationlogo?.url }}
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
                marginBottom: 5,
              }}
            >
              {employee?.firstname}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "#fff",
                  marginRight: 5,
                }}
              >
                {employee?.email}
              </Text>
            </View>
          </ImageBackground>
        )}
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
