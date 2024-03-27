import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { BarChart } from "react-native-chart-kit";

const AdminDashboard = () => {
  const [adminInfo, setAdminInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        data: [85, 100, 60, 75],
      },
    ],
  };

  useEffect(() => {
    fetchAdminInfo();
  }, []);

  const fetchAdminInfo = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      const response = await axios.get(
        "https://final-satisfied-backend-2.onrender.com/employer/admin/info",
        {
          headers: {
            authorization: token,
          },
          withCredentials: true,
        }
      );
      setAdminInfo(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching admin info:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : adminInfo ? (
        <View>
          <View style={[styles.infoContainer]} className="space-y-2 py-[15px]">
            <View className="w-[250px] h-[60px] flex justify-center items-center bg-[#0EA5E9] rounded-md">
              <Text className="text-white text-[17px] font-semibold">
                Total Students: {adminInfo.userCount}
              </Text>
            </View>
            <View className="w-[250px] h-[60px] flex justify-center items-center bg-[#F97316] rounded-md">
              <Text className="text-white text-[17px] font-semibold">
                Total Employers: {adminInfo.employerCount}
              </Text>
            </View>

            <View className="w-[250px] h-[60px] flex justify-center items-center bg-[#EAB308] rounded-md">
              <Text className="text-white text-[17px] font-semibold">
                Total Jobs Posted: {adminInfo.jobCount}
              </Text>
            </View>
          </View>
          <BarChart
            data={data}
            width={350} // Width of the chart
            height={220} // Height of the chart
            yAxisLabel={"Value"} // Label for the Y-axis
            verticalLabelRotation={30} // Rotate Y-axis labels for better readability
          />
        </View>
      ) : (
        <Text>No admin info available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: "center",
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AdminDashboard;
