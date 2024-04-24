import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Apple, Facebook, Google } from 'iconsax-react'

const LoginWith = () => {
  return (
    <View style={styles.container}>
      <Google />
      <Facebook />
      <Apple />
    </View>
  )
}

export default LoginWith
const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:'center'
    }
})