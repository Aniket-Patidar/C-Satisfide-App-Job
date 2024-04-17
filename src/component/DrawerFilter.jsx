import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Importing AntDesign icons
import Checkbox from "expo-checkbox";
import Slider from "@react-native-community/slider";

const CoolDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
  toggleDrawer,
  formData,
  setFormData,
  handelSubmit,
}) => {
  // Function to handle input changes
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSliderChange = (sliderValue) => {
    setFormData({ ...formData, salary: sliderValue });
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDrawerOpen}
        onRequestClose={toggleDrawer}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.overlay} onPress={toggleDrawer} />
          <View style={styles.drawer}>
            <View>
              <Text style={styles.title}>Profile</Text>
              <TextInput
                style={styles.input}
                placeholder="Job profile"
                value={formData.title}
                onChangeText={(text) => handleInputChange("title", text)}
              />
            </View>

            <View>
              <Text style={styles.title}>Location</Text>
              <TextInput
                style={styles.input}
                placeholder="Location"
                value={formData.location}
                onChangeText={(text) => handleInputChange("location", text)}
              />
            </View>

            <View>
              <Text style={styles.title}>Skills</Text>
              <TextInput
                style={styles.input}
                placeholder="Skills"
                value={formData.skills}
                onChangeText={(text) => handleInputChange("skills", text)}
              />
            </View>

            <View>
              <View className="flex flex-row items-start gap-2 justify-start">
                <Text style={styles.title}>Salary</Text>
                <Text style={styles.sliderValue}>
                  ₹ {""}
                  {formData.salary}
                </Text>
              </View>

              <Slider
                maximumValue={100000}
                minimumValue={0}
                minimumTrackTintColor="#307ecc"
                maximumTrackTintColor="#000000"
                step={1}
                value={formData?.salary || 0}
                onValueChange={handleSliderChange}
                style={styles.slider}
              />
            </View>

            <View style={styles.item}>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={formData.jobType === "In Office"}
                  onValueChange={(value) =>
                    handleInputChange("jobType", value ? "In Office" : null)
                  }
                />
                <Text style={styles.checkboxLabel}>In Office</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={formData.jobType === "Remote"}
                  onValueChange={(value) =>
                    handleInputChange("jobType", value ? "Remote" : null)
                  }
                />
                <Text style={styles.checkboxLabel}>Remote</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={formData.category == "internship"}
                  onValueChange={(value) =>
                    handleInputChange("category", value ? "internship" : null)
                  }
                />
                <Text style={styles.checkboxLabel}>Internship</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={formData.category === "job"}
                  onValueChange={(value) =>
                    handleInputChange("category", value ? "job" : null)
                  }
                />
                <Text style={styles.checkboxLabel}>Job</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={handelSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
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
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1.2,
    borderColor: "#b4b1b1",
    borderRadius: 4,
    padding: 5,
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  slider: {
    width: 300,
    height: 20,
    marginLeft: -15,
  },
  submitButton: {
    backgroundColor: "#2cc57b",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default CoolDrawer;
