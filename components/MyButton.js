import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function MyButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.background}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgb(243, 243, 243)",
    // backgroundColor: 'yellow',
    borderColor: "black",
    padding: 10,
    height: 60,
    textAlign: "center",
    justifyContent: "center",
    alignItems: 'center'
  },
  buttonText: {
    color: "rgb(68, 68, 68)",
  },
});
