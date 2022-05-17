import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Display({image}) {
  return (
      <Image source={image} style={styles.Picture}/>
  )
}

const styles = StyleSheet.create({
  Picture:{
    height:"100%",
    width:"100%",
    borderRadius:5,
  }
})