import React from "react";
import { view, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "FRIEND 1",
      age:"20"
    },
    {
      name: "FRIEND 2",
      age:"21"
    },
    {
      name: "FRIEND 3",
      age:"22"
    },
    {
      name: "FRIEND 4",
      age:"23"
    },
    {
      name: "FRIEND 5",
      age:"24"
    },
    {
      name: "FRIEND 6",
      age:"25"
    },
    {
      name: "FRIEND 7",
      age:"26"
    },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => {
        friend.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
