import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "react-native-web";
import Checkbox from "expo-checkbox";

const CoolDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <View style={styles.container}>
      <View className="w-full">
        <TouchableOpacity
          onPress={toggleDrawer}
          className="text-md border-[0.5px] border-[#c7c4c4] bg-white px-2 py-1 flex flex-row items-center w-[20%] mx-auto my-3 rounded-sm"
        >
          <AntDesign name="filter" size={15} color="#008BDC" />
          <Text className="text-[13px]">Filter</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isDrawerOpen}
        onRequestClose={toggleDrawer}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.overlay} onPress={toggleDrawer} />
          <View style={styles.drawer}>
            <View className="my-2">
              <Text className="my-1">Profile</Text>
              <TextInput
                className="border-[1px] w-[90%]  border-[#b4b1b1] rounded-sm  text-start px-1 "
                placeholder="please enter profile Data"
              ></TextInput>
            </View>

            <View className="my-1 space-y-1">
              <Text>Location</Text>
              <TextInput
                className="border-[1px] w-[90%]  border-[#b4b1b1] text-start px-1 rounded-sm"
                placeholder="please select location"
              ></TextInput>
            </View>

            <View className="my-1 flex flex-row items-center space-x-1">
              <Checkbox className="w-[13px] h-[13px]" />
              <Text>Work from home</Text>
            </View>

            <View className="my-1 flex flex-row items-center space-x-1">
              <Checkbox className="w-[13px] h-[13px]" />
              <Text>Part Time</Text>
            </View>

            <View className="my-1 flex flex-row items-center space-x-1">
              <Checkbox className="w-[13px] h-[13px]" />
              <Text>Include All internship</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  overlay: {
    flex: 1,
  },
  drawer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  drawerText: {
    fontSize: 18,
  },
});

export default CoolDrawer;
