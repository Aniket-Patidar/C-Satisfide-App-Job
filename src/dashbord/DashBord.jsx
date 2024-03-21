import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing, ScrollView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { Table, Row } from 'react-native-table-component';

const Dashboard = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const fadeInValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 800,
        delay: 200,
        easing: Easing.elastic(1),
        useNativeDriver: true,
      }),
      Animated.timing(fadeInValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const tableHead = ['Student Name', 'Email', 'Job Title', 'Status', 'Action'];
  const tableData = [
    ['John Doe', 'john.doe@example.com', 'Software Engineer', 'Pending', 'Update'],
    ['Jane Smith', 'jane.smith@example.com', 'Data Analyst', 'Accepted', 'Update'],
    ['Mike Johnson', 'mike.johnson@example.com', 'Product Manager', 'Rejected', 'Update'],
    // Add more rows as needed
  ];

  const handleUpdateStatus = (index) => {
    // Handle status update logic here
    console.log('Update status for index:', index);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome Back, User!</Text>
      </View>
      <Animated.View style={[styles.dataContainer, { transform: [{ scale: scaleValue }] }]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.dataCard}>
            <FontAwesome name="briefcase" size={24} color="#4080ED" />
            <Text style={styles.dataTitle}>Total Jobs Created</Text>
            <Text style={styles.dataValue}>150</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dataCard}>
            <FontAwesome name="file-text-o" size={24} color="#4080ED" />
            <Text style={styles.dataTitle}>Total Applications Received</Text>
            <Text style={styles.dataValue}>300</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dataCard}>
            <FontAwesome name="thumbs-down" size={24} color="#4080ED" />
            <Text style={styles.dataTitle}>Total Rejections</Text>
            <Text style={styles.dataValue}>50</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dataCard}>
            <AntDesign name="star" size={24} color="#4080ED" />
            <Text style={styles.dataTitle}>Your Metric</Text>
            <Text style={styles.dataValue}>75</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
      <View style={styles.chartContainer}>
        <Animated.View style={[styles.chart, { opacity: fadeInValue }]}>
          <LineChart
            data={chartData}
            width={350}
            height={200}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: () => '#4080ED',
              labelColor: () => '#000',
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#4080ED',
              },
            }}
            bezier
          />
        </Animated.View>
        <View style={styles.tableContainer}>
          <Text style={styles.tableTitle}>Recent Job Applications</Text>
          <ScrollView horizontal>
            <View>
              <Table borderStyle={{ borderWidth: 1, borderColor: '#4080ED' }}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    style={[styles.row, index % 2 && { backgroundColor: '#f2f2f2' }]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  dataContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dataCard: {
    width: 130,
    height: 130,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 5,
    marginVertical:5
  },
  dataTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4080ED',
    textAlign: 'center',
    marginBottom: 10,
  },
  dataValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4080ED',
    textAlign: 'center',
  },
  chartContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  chart: {
    marginVertical: 20,
    borderRadius: 16,
  },
  tableContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4080ED',
  },
  tableTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4080ED',
    marginBottom: 10,
  },
  head: { height: 40, backgroundColor: '#f2f2f2' },
  text: { margin: 6, textAlign: 'center' },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
});

export default Dashboard;
