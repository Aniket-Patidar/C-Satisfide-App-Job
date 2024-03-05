import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CoolDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <View style={styles.container}>
      <View className="bg-[#F8F8F8] w-full">
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


            <Text>Profile</Text>
            <TextInput></TextInput>
           
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
