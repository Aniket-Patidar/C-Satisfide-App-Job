import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Octicons, AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const ProductTable = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginVertical: 5,
          gap: 2,
        }}
      >
        <View
          style={[styles.card, { backgroundColor: "#124076", display: "flex" }]}
          className="space-x-2"
        >
          <Octicons name="person-add" size={23} color="white" />
          <Text style={{ color: "white", fontWeight: "800", fontSize: 16 }}>
            76 Applications
          </Text>
        </View>
        <View
          style={[styles.card, { backgroundColor: "#A95E5E" }]}
          className="space-x-2"
        >
          <AntDesign name="linechart" size={23} color="white" />
          <Text style={{ color: "white", fontWeight: "800", fontSize: 16 }}>
            500 Job Post{"    "}
          </Text>
        </View>
        <View
          style={[styles.card, { backgroundColor: "#6196A6" }]}
          className="space-x-2"
        >
          <FontAwesome name="handshake-o" size={23} color="white" />
          <Text style={{ color: "white", fontWeight: "800", fontSize: 16 }}>
            76 Applications
          </Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.table}>
            <View style={styles.thead}>
              <View style={styles.tr}>
                <View style={styles.th}>
                  <Text style={styles.heading}>Title</Text>
                </View>
                <View style={styles.th}>
                  <Text style={styles.heading}>Name</Text>
                </View>
                <View style={styles.th}>
                  <Text style={styles.heading}>Email</Text>
                </View>
                <View style={styles.th}>
                  <Text style={styles.heading}>Contract</Text>
                </View>
                <View style={styles.th}>
                  <Text style={styles.heading}>Status</Text>
                </View>
              </View>
            </View>
            <View style={styles.tr}>
              <View style={styles.th}>
                <Text>java</Text>
              </View>
              <View style={styles.th}>
                <Text>Aniket</Text>
              </View>
              <View style={styles.th}>
                <Text>anike..</Text>
              </View>
              <View style={styles.th}>
                <Text>62663..</Text>
              </View>
              <View style={styles.th}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  pending
                </Text>
              </View>
            </View>
            <View style={[styles.tr, styles.evenRow]}>
              <View style={styles.th}>
                <Text>web</Text>
              </View>
              <View style={styles.th}>
                <Text>Prince</Text>
              </View>
              <View style={styles.th}>
                <Text>anike..</Text>
              </View>
              <View style={styles.th}>
                <Text>62663..</Text>
              </View>
              <View style={styles.th}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  pending
                </Text>
              </View>
            </View>
            <View style={styles.tr}>
              <View style={styles.th}>
                <Text>Pytho</Text>
              </View>
              <View style={styles.th}>
                <Text>Ram</Text>
              </View>
              <View style={styles.th}>
                <Text>anike..</Text>
              </View>
              <View style={styles.th}>
                <Text>62663..</Text>
              </View>
              <View style={styles.th}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  pending
                </Text>
              </View>
            </View>
            <View style={[styles.tr, styles.evenRow]}>
              <View style={styles.th}>
                <Text>java</Text>
              </View>
              <View style={styles.th}>
                <Text>Aniket</Text>
              </View>
              <View style={styles.th}>
                <Text>anike..</Text>
              </View>
              <View style={styles.th}>
                <Text>62663..</Text>
              </View>
              <View style={styles.th}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  pending
                </Text>
              </View>
            </View>
            <View style={styles.tr}>
              <View style={styles.th}>
                <Text>web</Text>
              </View>
              <View style={styles.th}>
                <Text>Prince</Text>
              </View>
              <View style={styles.th}>
                <Text>anike..</Text>
              </View>
              <View style={styles.th}>
                <Text>62663..</Text>
              </View>
              <View style={styles.th}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  pending
                </Text>
              </View>
            </View>
            <View style={[styles.tr, styles.evenRow]}>
              <View style={styles.th}>
                <Text>Pytho</Text>
              </View>
              <View style={styles.th}>
                <Text>Ram</Text>
              </View>
              <View style={styles.th}>
                <Text>anike..</Text>
              </View>
              <View style={styles.th}>
                <Text>62663..</Text>
              </View>
              <View style={styles.th}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  pending
                </Text>
              </View>
            </View>
            <View style={styles.tr}>
              <View style={styles.th}>
                <Text>Pytho</Text>
              </View>
              <View style={styles.th}>
                <Text>Ram</Text>
              </View>
              <View style={styles.th}>
                <Text>anike..</Text>
              </View>
              <View style={styles.th}>
                <Text>62663..</Text>
              </View>
              <View style={styles.th}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  pending
                </Text>
              </View>
            </View>
            <View style={[styles.tr, styles.evenRow]}>
              <View style={styles.th}>
                <Text>java</Text>
              </View>
              <View style={styles.th}>
                <Text>Aniket</Text>
              </View>
              <View style={styles.th}>
                <Text>anike..</Text>
              </View>
              <View style={styles.th}>
                <Text>62663..</Text>
              </View>
              <View style={styles.th}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  pending
                </Text>
              </View>
            </View>
            <View style={styles.tr}>
              <View style={styles.th}>
                <Text>web</Text>
              </View>
              <View style={styles.th}>
                <Text>Prince</Text>
              </View>
              <View style={styles.th}>
                <Text>anike..</Text>
              </View>
              <View style={styles.th}>
                <Text>62663..</Text>
              </View>
              <View style={styles.th}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  pending
                </Text>
              </View>
            </View>
            <View style={[styles.tr, styles.evenRow]}>
              <View style={styles.th}>
                <Text>Pytho</Text>
              </View>
              <View style={styles.th}>
                <Text>Ram</Text>
              </View>
              <View style={styles.th}>
                <Text>anike..</Text>
              </View>
              <View style={styles.th}>
                <Text>62663..</Text>
              </View>
              <View style={styles.th}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  pending
                </Text>
              </View>
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
  table: {
    width: "100%",
  },
  thead: {
    backgroundColor: "#124076",
  },
  tr: {
    flexDirection: "row",
  },
  evenRow: {
    backgroundColor: "#f2f2f2",
  },
  heading: {
    color: "#fff",
    fontWeight: "bold",
  },
  th: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  td: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  card: {
    height: 90,
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
    borderRadius: 6,
  },
});

export default ProductTable;
