import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

const CourseItem = ({ image, name, member }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image style={styles.image} source={image} />
        <Text>{name}</Text>
        <Text>{member} members</Text>
      </View>
      <View>
        <Pressable style={styles.button}>
          <Text>Join</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CourseItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth:1,
    borderColor:"black",
    padding:12,
    borderRadius:12

  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "stretch",
  },
  button: {
    width: 100,
    marginHorizontal: 24,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
    marginTop:12
  },
});
