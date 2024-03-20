import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Button,
} from "react-native";
import Filter from "../component/DrawerFilter";
const ProductTable = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/graph.png")}
        className="w-[160px] mt-6 h-[100px] mx-auto"
      ></Image>

      <Text className="mx-auto w-[70%] text-center opacity-[.5] mb-2">
        Total <Text className="text-blue-900">56</Text> Applications on{" "}
        <Text className="text-blue-900">506</Text> jobs Aniket Patidar
      </Text>

      <View className="flex flex-row justify-between px-3 py-3">
        <Text className="font-semibold text-md">Application</Text>
        <Text className="border-[.2px] px-2 rounded-full items-center justify-center  text-[12px] opacity-[.5]">
          last Week
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ScrollView horizontal={true} className="px-[10px]">
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.header}>Job</Text>
              <Text style={styles.header}>Name</Text>
              <Text style={styles.header} className="">
                Status
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.cell}>web Developer</Text>
              <Text style={styles.cell}>Aniket Patidar </Text>
              <Text style={styles.cell}>Pending</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.cell} className="text-sm">
                web Developer
              </Text>
              <Text style={styles.cell} className="text-[13px]">
                {" "}
                Aniket Patidar{" "}
              </Text>
              <Text style={styles.cell}>Pending</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.cell}>web Developer</Text>
              <Text style={styles.cell}>Aniket Patidar </Text>
              <Text style={styles.cell}>Pending</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.cell}>web Developer</Text>
              <Text style={styles.cell}>Aniket Patidar </Text>
              <Text style={styles.cell}>Pending</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.cell}>web Developer</Text>
              <Text style={styles.cell}>Aniket Patidar </Text>
              <Text style={styles.cell}>Pending</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.cell}>web Developer</Text>
              <Text style={styles.cell}>Aniket Patidar </Text>
              <Text style={styles.cell}>Pending</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "200vh",
    backgroundColor: "white",
  },
  table: { flexDirection: "column", borderWidth: 1, borderColor: "#e2e8f0" },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e2e8f0",
  },
  header: { flex: 1, padding: 10, fontWeight: "bold", textAlign: "center" },
  cell: { flex: 1, padding: 10, textAlign: "center" },
});
export default ProductTable;
