import {
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../constants/colors";

import { ToastAndroid } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../component/Loading";

const Forget = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor("#4080ED");
    StatusBar.setBarStyle("dark-content");
  }, []);

  const [changePass, setChangePass] = useState({
    activationCode: "",
    password: "",
  });

  const navigation = useNavigation();
  const [email, setEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpTokenExists, setOtpTokenExists] = useState(false);
  const handlePress = () => {
    navigation.goBack();
  };

  const sendMail = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://api.satisfiedjob.com/employee/employee/forget-password/email`,
        { email: email },
        {
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
        }
      );
      const { Token } = data;
      await AsyncStorage.setItem("OTPToken", Token);
      setOtpTokenExists(true);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error("Error sending mail:", JSON.stringify(error));
      setLoading(false);
      ToastAndroid.show("Please try again", ToastAndroid.SHORT);
    }
  };

  const change = async () => {
    // Accept 'changePass' parameter
    try {
      // Start loading
      setLoading(true);

      // Get token from AsyncStorage
      const token = await AsyncStorage.getItem("OTPToken");

      // Make API call
      const response = await axios.post(
        "https://api.satisfiedjob.com/employee/employee/forget-password/code",
        changePass,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
          withCredentials: true,
        }
      );
      setLoading(false);
      ToastAndroid.show("password change successfully.", ToastAndroid.SHORT);
      await AsyncStorage.removeItem("OTPToken");
    } catch (error) {
      console.log(JSON.stringify(error));
      // Stop loading
      setLoading(false);
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  };

  return (
    <View className="px-[15px] py-[10px]  flex justify-center">
      {loading ? (
        <>
          <Loading></Loading>
        </>
      ) : (
        <View className="">
          <TouchableOpacity>
            <MaterialIcons
              onPress={handlePress}
              name="arrow-back-ios"
              size={18}
              color="black"
            />
          </TouchableOpacity>
          <View className="px-[20px] text-center  justify-center h-full space-y-5">
            <View className="space-y-3">
              <Image
                className="w-[180px] h-[140px] mx-auto object-cover"
                source={require("../../assets/Images/otp.png")}
              />

              <View className="space-y-2">
                <Text className="text-center text-[22px] font-semibold text-[#050505]">
                  OTP Verification
                </Text>
                <View className="mb-2">
                  <View>
                    <Text className="text-center">
                      We will send you an One Time Passcode
                    </Text>
                    <Text className="text-center">vai this email address</Text>
                  </View>
                </View>
                {!otpTokenExists ? (
                  <>
                    <View
                      style={{
                        width: "100%",
                        height: 38,
                        borderColor: "black",
                        borderWidth: 1,
                        borderRadius: 100,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 10,
                      }}
                      className="my-2"
                    >
                      <TextInput
                        placeholder="example@gmail.com"
                        placeholderTextColor={COLORS.black}
                        keyboardType="email-address"
                        onChangeText={(text) => setEmail(text)}
                        style={{
                          width: "100%",
                        }}
                        className="opacity-[0.5]"
                      />
                    </View>

                    <View
                      style={{
                        backgroundColor: "#4080ED",
                        width: 140,
                        height: 40,
                        borderRadius: 8,
                        overflow: "hidden",
                      }}
                      className="flex justify-center rounded-3xl mx-auto items-center text-center"
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 16,
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                        onPress={sendMail}
                        className="text-center"
                      >
                        Send
                      </Text>
                    </View>
                  </>
                ) : (
                  <>
                    <View
                      style={{
                        width: "100%",
                        height: 35,
                        borderColor: "black",
                        borderWidth: 1,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 10,
                      }}
                      className="my-2"
                    >
                      <TextInput
                        placeholder="Password"
                        placeholderTextColor={COLORS.black}
                        // keyboardType="email-address"
                        onChangeText={(text) =>
                          setChangePass({ ...changePass, password: text })
                        }
                        style={{
                          width: "100%",
                        }}
                        className="opacity-[0.5]"
                      />
                    </View>

                    <View
                      style={{
                        width: "100%",
                        height: 35,
                        borderColor: "black",
                        borderWidth: 1,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 10,
                      }}
                      className="my-2"
                    >
                      <TextInput
                        placeholder="OTP"
                        placeholderTextColor={COLORS.black}
                        keyboardType="text"
                        onChangeText={(text) =>
                          setChangePass({ ...changePass, activationCode: text })
                        }
                        style={{
                          width: "100%",
                        }}
                        className="opacity-[0.5]"
                      />
                    </View>

                    <View
                      style={{
                        backgroundColor: "#4080ED",
                        width: 140,
                        height: 40,
                        borderRadius: 8,
                        overflow: "hidden",
                      }}
                      className="flex justify-center rounded-3xl mx-auto items-center text-center"
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 16,
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                        onPress={change}
                        className="text-center"
                      >
                        Submit
                      </Text>
                    </View>
                  </>
                )}
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Forget;
