import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <AddNewPost />
    </SafeAreaView>
  )
}

export default NewPostScreen