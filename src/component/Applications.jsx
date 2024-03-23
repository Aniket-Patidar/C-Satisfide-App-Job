import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useDispatch } from "react-redux";
import { updateStatus } from "../redux/action/employeeAction";

const TableItem = ({ item, onUpdateStatus }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "#FFC107"; // Yellow
      case "Accepted":
        return "#4CAF50"; // Green
      case "Rejected":
        return "#F44336"; // Red
      default:
        return "#FFFFFF"; // Default color
    }
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(item.status);

  const dispatch = useDispatch();

  const statusOptions = ["Pending", "Accepted", "Rejected"];

  const handleStatusChange = ({ status, id }) => {
    setSelectedStatus(status);
    setShowDropdown(false);
    onUpdateStatus(status);
    dispatch(updateStatus({ id, status }));
  };

  return (
    <View style={styles.row}>
      <Text style={styles.cell}>
        {item.studentId
          ? `${item.studentId.firstname} ${item.studentId.lastname}`
          : "N/A"}
      </Text>
      <Text style={styles.cell}>
        {item.studentId ? item.studentId.email : "N/A"}
      </Text>
      <Text style={styles.cell}>
        {item.studentId ? item.studentId.contact : "N/A"}
      </Text>
      <Text style={styles.cell}>{item.jobId ? item.jobId.title : "N/A"}</Text>
      <TouchableOpacity
        style={styles.statusCell}
        onPress={() => setShowDropdown(true)}
      >
        <Text style={[styles.cell, { color: getStatusColor(item.status) }]}>
          {selectedStatus}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={showDropdown}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowDropdown(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.dropdown}>
            {statusOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() =>
                  handleStatusChange({ status: option, id: item._id })
                }
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const ResponsiveTable = ({ data }) => {
  const updateStatus = (status) => {};

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Name</Text>
          <Text style={styles.headerText}>Email</Text>
          <Text style={styles.headerText}>Contact</Text>
          <Text style={styles.headerText}>Job Title</Text>
          <Text style={styles.headerText}>Status</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TableItem item={item} onUpdateStatus={updateStatus} />
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.table}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    width: 100, // Adjust width as needed
    paddingVertical: 10,
  },
  table: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default ResponsiveTable;
