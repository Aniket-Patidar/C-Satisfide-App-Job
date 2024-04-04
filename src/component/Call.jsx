import { Linking } from "react-native";

// HR department phone number

// Function to make a phone call
const makePhoneCall = (phoneNumber) => {
  Linking.openURL(`tel:${phoneNumber}`);
};

// Function to send a message
const sendMessage = (message, callerNumber) => {
  Linking.openURL(`sms:${callerNumber}?body=${encodeURIComponent(message)}`);
};

// Function to check if the current time is between 8:00 PM and 8:00 AM
const isNightTime = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  // return currentHour >= 20 || currentHour < 8;
  return false
};
// Function to handle incoming calls from students
exports.handleIncomingCall = (callerNumber) => {
  if (callerNumber) {
    // HR calling, handle differently
    if (isNightTime()) {
      sendMessage(
        "HR is not available at the moment. Please try again during business hours.",
        callerNumber
      );
    } else {
      makePhoneCall(callerNumber);
    }
  } else {
    sendMessage(
      "I'm not available right now. Please try again later.",
      callerNumber
    );
  }
};
