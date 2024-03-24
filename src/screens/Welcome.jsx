import { View, Text, Pressable, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";
import Button from "../component/Button";

const Welcome = ({ navigation }) => {
  useEffect(() => {
    StatusBar.setBackgroundColor("#4080ED");
  }, []);

  return (
    <View
      className="bg-[#4080ED] relative w-screen h-screen"
      style={{ flex: 1 }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        {/* <View>
          <Image
            source={require("../../assets/hero1.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />

          <Image
            source={require("../../assets/hero2.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: -30,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" },
              ],
            }}
          />
          <Image
            source={require("../../assets/hero3.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" },
              ],
            }}
          />

          <Image
            source={require("../../assets/hero2.jpg")}
            style={{
              height: 150,
              width: 150,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />
        </View> */}

        {/* content  */}

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 320,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Let's Get
          </Text>
          <Text
            style={{
              fontSize: 46,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Started
          </Text>

          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 0,
              }}
            >
              Connect with each other with chatting
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Calling, Enjoy Safe and private texting
            </Text>
          </View>

          <View className="flex flex-row">
            <Button
              title="Find Job"
              onPress={() =>
                navigation.navigate("Register Student", { role: "Student" })
              }
              style={{
                marginTop: 5,
                width: "50%",
              }}
            />
            <Button
              title="Company"
              onPress={() =>
                navigation.navigate("Register Employee", { role: "Employee" })
              }
              style={{
                marginTop: 5,
                width: "50%",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Find your dream job on our app
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
