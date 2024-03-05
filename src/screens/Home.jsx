import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Header from "../component/Header";
import Container from "../component/Container";
import { MaterialIcons } from "@expo/vector-icons";
import Footer from "../component/Footer";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    // You can perform your search logic here
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Search submitted:", searchText);
  };

  return (
    <View className="flex flex-row px-2  items-center border-[1.5px] rounded-md  border-gray-400 mt-3">
      <Ionicons name="search" classNam="" size={15} color="gray" />
      <TextInput
        style={`flex-1 text-base`}
        placeholder="Search..."
        placeholderTextColor="gray"
        onChangeText={handleSearch}
        value={searchText}
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
        className="mx-2"
      />
    </View>
  );
};

const Home = ({navigation}) => {
  const [searchText, setSearchText] = useState("");

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={true}>
      {/* Hero Page */}
      <View className="w-[100%]  min-h-[100vh] px-[13px] py-2">
        <Header navigation={navigation}></Header>
        {/* Home */}
        <View className="mt-[40px]">
          <Text className="w-[80%] text-2xl font-semibold">
            The
            <Text className="text-[#0B60B0] font-semibold mx-2">
              {""} Easiest Way{" "}
            </Text>
            to Get Your New Job
          </Text>

          <Text className="my-3 text-[14px] font-light">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </Text>

          <SearchForm></SearchForm>

          <View className="mt-[30px]">
            <Image
              className=" bg-cover bg-cover w-[278px] h-[260px]"
              source={require("../../assets/hero-image.png")}
            ></Image>
          </View>
        </View>
      </View>

      {/*  */}
      <View style={{ minHeight: "90vh", paddingBottom: "80px" }} >
        <Container bgColor="#F4F2F6">
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              paddingVertical: "20px",
            }}
          >
            Job Openings in Top companies
          </Text>
        </Container>
        <ScrollView
          className="my-[20px] -ml-[25px]"
          horizontal={true}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              overflowX: "auto",
            }}
          >
            {array.map((e, i) => (
              <View
                key={i}
                style={{
                  width: 290,
                  height: 250,
                  paddingVertical: 25,
                  paddingHorizontal: 10,
                  marginLeft: 40,
                  backgroundColor: "#ffffff",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../assets/c1.webp")}
                  className="w-[80px] h-[25px]"
                />
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Text className="mt-2 opacity-[.5]">
                    Baja Finaxe limahpeoje
                  </Text>
                  <Text className="text-[13px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    qui vitae fugit exercitationem quam nemo, quas aperiam
                    tempora magnam officia deleniti quia itaque ratione pariatur
                  </Text>
                  <TouchableOpacity
                    className="text-sm"
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Text className="text-[#0B60B0]">View jobs</Text>
                    <MaterialIcons
                      name="navigate-next"
                      size={20}
                      color="#0B60B0"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* section 3 */}

      {/* <Footer></Footer> */}
    </ScrollView>
  );
};

export default Home;
