import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  NativeModules,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Constants from "expo-constants";
import MyButton from "./components/MyButton";

export default function App() {
  const memoryValues = ["MC", "MR", "M+", "M-", "MS", "M"];
  const calcValues = [
    ["%", "CE", "C", "DEL"],
    ["1/x", "x2", "2/x", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["+/-", "0", ".", "="],
  ];

  // var [input, setInput] = useState(["0", "1"]);
  var [input, setInput] = useState([]);

  const setInputFunction = (e) => {
    setInput((data) => [...data, e]);
    // console.log(e);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.mainView}>
        <View style={styles.header}>
          <Text style={styles.heading}>Calculator</Text>
        </View>
        <View style={styles.screen}>
          <View style={styles.subScreen}>
            <View style={styles.inputScreen}>
              <TextInput style={styles.inputText} numberOfLines={1} autoCorrect={false} spellCheck={false} >{input}</TextInput>
            </View>
          </View>
        </View>
        <View style={styles.memoryRow}>
          {memoryValues.map((val, ind) => {
            return (
              <View key={ind} style={styles.memoryButton}>
                <MyButton>{val}</MyButton>
              </View>
            );
          })}
        </View>
        <View style={styles.buttonView}>
          {calcValues.map((val, ind) => {
            return (
              <View key={ind} style={styles.buttonRow}>
                {val.map((value, index) => {
                  return (
                    <View key={index} style={styles.mybutton}>
                      <MyButton onPress={()=>setInputFunction(value)}>{value}</MyButton>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
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
  mainView: {
    flex: 1,
  },
  header: { flex: 0.7 },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  screen: {
    flex: 1.5,
    backgroundColor: "red",
    flexDirection: "column-reverse",
    marginBottom: 25,
  },
  subScreen: {
    flex: 0.7,
    backgroundColor: "green",
    justifyContent: "center",
  },
  inputScreen: {
    flex: 0.6,
    backgroundColor: "yellow",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 15,
    overflow: 'hidden',
    flexDirection: 'row'
  },
  inputText: {
    fontSize: 35,
  },
  memoryRow: {
    flex: 0.85,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
  },
  memoryButton: {
    width: "16.5%",
    paddingHorizontal: 2,
  },
  buttonView: {
    paddingVertical: 0,
    flex: 5,
    // backgroundColor: "red",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    // backgroundColor: "green",
    width: "100%",
    paddingVertical: 2,
  },
  mybutton: {
    paddingHorizontal: 2,
    width: "25%",
    height: 60,
    // backgroundColor: 'red'
  },
});
