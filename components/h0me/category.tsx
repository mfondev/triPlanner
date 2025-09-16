import { StyleSheet, Text, View,ScrollView ,Image } from 'react-native'
import React from 'react'

export default function Category() {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
<ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        <View style={styles.categoryItem}>
          <Image style={styles.categoryImage} source={require('@/assets/images/nature.jpg')} />
          <Text style={styles.categoryText}>Nature</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image style={styles.categoryImage} source={require('@/assets/images/culture.jpg')} />
          <Text style={styles.categoryText}>Culture</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image style={styles.categoryImage} source={require('@/assets/images/wildlife.jpg')} />
          <Text style={styles.categoryText}>Wildlife</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image style={styles.categoryImage} source={require('@/assets/images/festival.jpg')} />
          <Text style={styles.categoryText}>Festival</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image style={styles.categoryImage} source={require('@/assets/images/mountain.jpg')} />
          <Text style={styles.categoryText}>Mountain</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image style={styles.categoryImage} source={require('@/assets/images/beach.jpg')} />
          <Text style={styles.categoryText}>Beach</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    categoryItem: {
        alignItems: 'center',
    },
    categoryImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    categoryText: {
        marginTop: 8,
        fontWeight: 'bold',
        fontSize: 16,
    },
})