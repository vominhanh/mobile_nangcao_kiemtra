import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import React from 'react'

const Input = ({placeholder, image, password}) => {
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image} resizeMode='stretch' />
      <TextInput placeholder={placeholder} style={{flex:1}} />
      {
        password && <Image style={styles.image} source={require("../assets/images/visible.png")} />
      }
    </View>
  )
}

export default Input
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:12,
        backgroundColor:"#ccc",
        flexDirection:'row'
    },
    image:{
        width:30,
        height:30
    }
})