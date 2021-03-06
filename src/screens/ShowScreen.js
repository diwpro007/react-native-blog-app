import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
  const { state } = useContext(Context);
  const { id } = route.params;

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
