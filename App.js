import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  NativeModules,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Constants from "expo-constants";
import MyButton from "./components/MyButton";

export default function App() {

  const calcValues = [
    ["%", "CE", "C", "DEL"],
    ["1/x", "x2", "2/x", "/"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["+/-", "0", ".", "="],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.heading}>Calculator</Text>
      </View>
      <View style={styles.screen}></View>
      <View style={styles.memoryRow}></View>
      <View style={styles.buttonView}>
        {calcValues.map((val, ind) => {
          return (
            <View style={styles.buttonRow}>
              {val.map((value, index) => {
                return (
                  <View style={styles.mybutton}>
                    <MyButton>{value}</MyButton>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ececec",
    marginTop: Constants.statusBarHeight,
    padding: 10,
  },
  header: {flex: 1},
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  screen: {flex: 3},
  memoryRow: {flex: 1},
  buttonView: {
    paddingVertical: 10,
    flex: 5
    // backgroundColor: "red",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: "green",
    width: "100%",
    paddingVertical: 2
  },
  mybutton: {
    paddingHorizontal: 2,
    width: "25%",
    height: 50,
    // backgroundColor: 'red'
  },
});
