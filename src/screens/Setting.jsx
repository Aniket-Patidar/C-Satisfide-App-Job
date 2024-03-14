import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Setting = () => {
  const options = [
    { label: "Change Number", icon: "ios-call", onPress: () => {} },
    { label: "Language", icon: "ios-globe", onPress: () => {} },
    { label: "Notifications", icon: "ios-notifications", onPress: () => {} },
    { label: "Contact Support", icon: "ios-help-circle", onPress: () => {} },
    { label: "Rate Us", icon: "ios-star", onPress: () => {} },
    { label: "Terms & Conditions", icon: "ios-document", onPress: () => {} },
    { label: "Privacy Policy", icon: "ios-lock", onPress: () => {} },
    { label: "Delete Account", icon: "ios-trash", onPress: () => {} },
    { label: "Logout", icon: "ios-log-out", onPress: () => {} },
  ];

  React.useEffect(() => {
    StatusBar.setBackgroundColor("#4080ED");
  }, []);

  return (
    <View style={styles.container} className="space-y-4 flex flex-col">
    
      <TouchableOpacity>
        <View
          style={styles.option}
          className="bg-white py-[12px] rounded-lg px-1 justify-between"
        >
          <View className="flex items-center flex-row">
            <Image
              source={require("../../assets/settings/support.png")}
              className="w-[25px] h-[25px]"
            ></Image>
            <Text style={styles.optionText}>Change Number</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={styles.option}
          className="bg-white py-[12px] rounded-lg px-1 justify-between"
        >
          <View className="flex items-center flex-row">
            <Image
              source={require("../../assets/settings/language.png")}
              className="w-[25px] h-[25px]"
            ></Image>
            <Text style={styles.optionText}>Language</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={styles.option}
          className="bg-white py-[12px] rounded-lg px-1 justify-between"
        >
          <View className="flex items-center flex-row">
            <Image
              source={require("../../assets/settings/notification.png")}
              className="w-[24px] h-[24px]"
            ></Image>
            <Text style={styles.optionText}>Notification</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={styles.option}
          className="bg-white py-[12px] rounded-lg px-1 justify-between"
        >
          <View className="flex items-center flex-row">
            <Image
              source={require("../../assets/settings/support.png")}
              className="w-[24px] h-[24px]"
            ></Image>
            <Text style={styles.optionText}>Consumer Support</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={styles.option}
          className="bg-white py-[12px] rounded-lg px-1 justify-between"
        >
          <View className="flex items-center flex-row">
            <Image
              source={require("../../assets/settings/privacy.png")}
              className="w-[24px] h-[24px]"
            ></Image>
            <Text style={styles.optionText}>Privacy Polices</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="black" />
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity>
        <View
          style={styles.option}
          className="bg-white py-[12px] rounded-lg px-1 justify-between"
        >
          <View className="flex items-center flex-row">
            <Image
              source={require("../../assets/settings/rating.png")}
              className="w-[24px] h-[24px]"
            ></Image>
            <Text style={styles.optionText}>Rating</Text>
          </View>
        </View>
      </TouchableOpacity>
      

      <TouchableOpacity>
        <View
          style={styles.option}
          className="bg-white py-[12px] rounded-lg px-1 justify-between"
        >
          <View className="flex items-center flex-row">
            <Image
              source={require("../../assets/settings/delete.png")}
              className="w-[24px] h-[24px]"
            ></Image>
            <Text style={styles.optionText}>Delete</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={styles.option}
          className="bg-white py-[12px] rounded-lg px-1 justify-between"
        >
          <View className="flex items-center flex-row">
            <Image
              source={require("../../assets/settings/logout.png")}
              className="w-[23px] h-[23px]"
            ></Image>
            <Text style={styles.optionText}>Logout</Text>
          </View>
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F2F2F2",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    // borderBottomWidth: 1,
    // borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 14,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default Setting;
