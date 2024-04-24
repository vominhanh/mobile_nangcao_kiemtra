import { View, Text, Image, Pressable, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const LaunchScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Data/Image 32.jpg")} resizeMode='stretch' width={100} height={100} />
        <Text style={{ fontWeight: "bold" }}>The Essential News</Text>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate("LoginScreen")} style={[styles.button, { backgroundColor: 'purple' }]}>
          <Text style={{ color: 'white' }}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  )
}
const deviceWidth = Dimensions.get("window").width;
export default LaunchScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: deviceWidth - 24,
    height: 50,
    margin: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: "center",
    borderWidth: 1,
    borderColor: 'blue'
  }
