import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Navigation Of Button</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to Lists Demo"
      />
      <Button
        onPress={() => navigation.navigate("Images")}
        title="Go to Images Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Demo"
      />

      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Demo"
      />
       <Button
        onPress={() => navigation.navigate("Square2")}
        title="Go to Square reduser Demo"
      />
       <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to text screen Demo"
      />
       <Button
        onPress={() => navigation.navigate("Box")}
        title="Go to box screen Demo"
      />
      {/* <TouchableOpacity  onPress={() => props.navigation.navigate("List")}>
        <Text>Go to list Demo</Text>
        <Text>Go to list Demo</Text>
        <Text>Go to list Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
