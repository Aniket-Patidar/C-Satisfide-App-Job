import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

const RegistrationScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3F4F6",
      }}
    >
      <View
        style={{
          backgroundColor: "#FFFFFF",
          padding: 20,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
          width: "80%",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Register
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderColor: "#D1D5DB",
            marginBottom: 20,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
          placeholder="Username"
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderColor: "#D1D5DB",
            marginBottom: 20,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderColor: "#D1D5DB",
            marginBottom: 20,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderColor: "#D1D5DB",
            marginBottom: 20,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#3B82F6",
            paddingVertical: 12,
            borderRadius: 8,
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate("Jobs")}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "#4B5563" }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#3B82F6", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegistrationScreen;
