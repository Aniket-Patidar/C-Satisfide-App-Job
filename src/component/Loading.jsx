import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View className="w-full h-[80vh] flex items-center justify-center">
      <ActivityIndicator size="large" color="#007AFF" />
      <Text>Loading...</Text>
    </View>
  );
};

export default Loading;
