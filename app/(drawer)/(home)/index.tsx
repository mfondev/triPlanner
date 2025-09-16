import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/theme'
import Category from '@/components/h0me/category'

export default function index() {
  return (
    <View style={styles.container}>
      <Text>Let's Travel</Text>
      <Category />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor: Colors.gray
  }
})