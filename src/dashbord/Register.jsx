import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../constants/colors";
import { registerEmployee } from "../redux/action/employeeAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../component/Loading";
import { useNavigation } from "@react-navigation/native";

const Register = ({ route }) => {
  const { setUserLoggedIn, setEmployeeLoggedIn } = route.params;
  const dispatch = useDispatch();
  const { employee, error, loading } = useSelector((e) => e.employee);
  const [userData, setUserData] = useState({
    contact: "",
    email: "",
    organisationname: "",
    password: "",
    firstname: "",
  });

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const scrollViewRef = useRef(null);
  const { width } = Dimensions.get("window");

  const navigation = useNavigation();

  const scrollTo = (x) => scrollViewRef.current.scrollTo({ x, animated: true });

  const handleInputChange = (field, value) => {
    setUserData({
      ...userData,
      [field]: value,
    });
  };

  const handleSignUp = () => {
    if (
      !userData.firstname ||
      !userData.email ||
      !userData.contact ||
      !userData.password ||
      !userData.organisationname
    ) {
      return;
    }

    dispatch(registerEmployee(userData));
  };

  useEffect(() => {
    if (employee) {
      setEmployeeLoggedIn(true);
    }
  }, [employee]);

  useEffect(() => {
    if (error) {
      // Handle error
    }
  }, [error]);

  const handleNext = () => {
    scrollTo(currentStep + 1 * width);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    scrollTo(currentStep - 1 * width);
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {loading ? (
        <Loading />
      ) : (
        <View style={{ flex: 1 }}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ width, paddingHorizontal: 22 }}>
              <View style={{ marginVertical: 2 }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    marginVertical: 12,
                    color: COLORS.black,
                  }}
                >
                  Create Account
                </Text>
              </View>

              <View style={{ marginBottom: 3 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Name
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Enter your Name"
                    onChangeText={(text) =>
                      handleInputChange("firstname", text)
                    }
                    style={{
                      width: "100%",
                    }}
                  />
                </View>
              </View>

              <View style={{ marginBottom: 3 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Organization Name
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Enter your organization name"
                    onChangeText={(text) =>
                      handleInputChange("organisationname", text)
                    }
                    style={{
                      width: "100%",
                    }}
                  />
                </View>
              </View>

              <View style={{ marginBottom: 3 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Email address
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Enter your email address"
                    onChangeText={(text) => handleInputChange("email", text)}
                    style={{
                      width: "100%",
                    }}
                  />
                </View>
              </View>

              <View style={{ marginBottom: 3 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Contact
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Enter your contact number"
                    onChangeText={(text) => handleInputChange("contact", text)}
                    style={{
                      width: "100%",
                    }}
                  />
                </View>
              </View>

              <View style={{ marginBottom: 3 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Password
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Enter your password"
                    onChangeText={(text) => handleInputChange("password", text)}
                    secureTextEntry={!isPasswordShown}
                    style={{
                      width: "100%",
                    }}
                  />

                  <TouchableOpacity
                    onPress={() => setIsPasswordShown(!isPasswordShown)}
                    style={{
                      position: "absolute",
                      right: 12,
                    }}
                  >
                    {isPasswordShown == true ? (
                      <Ionicons name="eye-off" size={24} color={COLORS.black} />
                    ) : (
                      <Ionicons name="eye" size={24} color={COLORS.black} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <View className="mt-[20px]">
                <Button
                  title="Next"
                  filled
                  style={{
                    marginTop: 80,
                    marginBottom: 4,
                  }}
                  onPress={handleNext}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: COLORS.grey,
                    marginHorizontal: 10,
                  }}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login Employee")}
                  className="flex flex-row gap-1"
                  style={{ fontSize: 14 }}
                >
                  <Text>Already have an Account</Text>
                  <Text className="text-[#008BDC]">Login</Text>
                </TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: COLORS.grey,
                    marginHorizontal: 10,
                  }}
                />
              </View>
            </View>

            <View style={{ width, paddingHorizontal: 22 }}>
              <View style={{ marginVertical: 2 }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    marginVertical: 12,
                    color: COLORS.black,
                  }}
                >
                  Orginations Details
                </Text>
              </View>

              <View style={{ marginBottom: 3 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Industry
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Enter Industry"
                    onChangeText={(text) => handleInputChange("industry", text)}
                    style={{
                      width: "100%",
                    }}
                  />
                </View>
              </View>

              <View style={{ marginBottom: 3 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Company Size
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Enter Company Size"
                    onChangeText={(text) =>
                      handleInputChange("companySize", text)
                    }
                    style={{
                      width: "100%",
                    }}
                  />
                </View>
              </View>

              <View style={{ marginBottom: 3 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Compony Location
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Enter your Compony Location"
                    onChangeText={(text) => handleInputChange("location", text)}
                    style={{
                      width: "100%",
                    }}
                  />
                </View>
              </View>

              <View style={{ marginBottom: 3 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Compony Website
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Enter your Compony Website"
                    onChangeText={(text) => handleInputChange("website", text)}
                    style={{
                      width: "100%",
                    }}
                  />
                </View>
              </View>

              <View style={{ marginBottom: 3 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Social Media Links
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Social Media Links"
                    onChangeText={(text) =>
                      handleInputChange("socialMedia", text)
                    }
                    style={{
                      width: "100%",
                    }}
                  />
                </View>
              </View>

              <View className="mt-[20px]">
                <Button
                  title="Register"
                  filled
                  style={{
                    marginTop: 80,
                    marginBottom: 4,
                  }}
                  onPress={handleSignUp}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: COLORS.grey,
                    marginHorizontal: 10,
                  }}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login Employee")}
                  className="flex flex-row gap-1"
                  style={{ fontSize: 14 }}
                >
                  <Text>Already have an Account</Text>
                  <Text className="text-[#008BDC]">Login</Text>
                </TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: COLORS.grey,
                    marginHorizontal: 10,
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Register;
