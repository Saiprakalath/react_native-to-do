import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(newValue) => setName(newValue)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>{`My name is ${name}`}</Text>
      {name.length<4 ? <Text>name must be 4 charactor</Text>:null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
export default TextScreen;
