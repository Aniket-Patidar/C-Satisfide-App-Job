import React, { useState } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DocumentUploadScreen() {
  const [pickedDocument, setPickedDocument] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Accept any type of file
      });
      if (result.type === "success") {
        setPickedDocument(result);
      } else {
        setPickedDocument(null); // Handle cancel or error
      }
    } catch (error) {
      console.log("Error picking document: ", error);
    }
  };

  return (
    <TouchableOpacity
      onPress={pickDocument}
      className="flex flex-row items-start gap-1 border-b-[.4px] my-auto border-gray-300 py-2"
    >
      <MaterialCommunityIcons
        name="cloud-upload-outline"
        size={20}
        color="black"
      />
      <View className="space-y-1">
        <Text>Upload Resume</Text>
        <Text className="text-[13px]">Make sure that you upload pdf</Text>
      </View>
    </TouchableOpacity>
  );
}
