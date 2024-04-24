import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";

const UserItem = ({ image, name, job }) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={{marginTop:24,flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{textAlign:"center"}}>{name}</Text>
        <Text style={{textAlign:"center"}}>{job}</Text>
      </View>

      <View>
        <Pressable style={styles.button}>
          <Text>Connect</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  background: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    height: 50,
    width: "100%",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "stretch",
    position: "absolute",
    marginTop: 50,
  },
  button: {
    width: 100,
    marginHorizontal: 24,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
    marginVertical: 12,
  },
});
