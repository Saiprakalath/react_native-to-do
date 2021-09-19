import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const greeting = <Text style={styles.nameStyle}>My name is Sai</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Getting stared with React Native!</Text>
      {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  nameStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
