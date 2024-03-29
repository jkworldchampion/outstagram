import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import FormikPostUploader from './FormikPostUploader'
import { NavigationContainer } from '@react-navigation/native'


const AddNewPost = ({navigation}) => (
  <View style={styles.container}>
    <Header navigation={navigation}/>
    <FormikPostUploader navigation={navigation}/>
  </View>
)

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image 
          source={{ uri: 'https://img.icons8.com/ios-glyphs/90/000000/back.png' }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>New Post</Text>
      <Text></Text>
    </View>
)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10 
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 25,
  },
})


export default AddNewPost