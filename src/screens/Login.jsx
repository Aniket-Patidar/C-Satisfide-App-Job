// src/LoginScreen.js
import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

const LoginScreen = ({ navigation }) => {
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
          Login
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
          placeholder="Password"
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
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{ color: "#3B82F6", textAlign: "center", marginBottom: 10 }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "#4B5563" }}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#3B82F6", fontWeight: "bold" }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
