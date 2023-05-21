import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'
import HomeScreen from './HomeScreen'
import NewPostScreen from './NewPostScreen'

const Stack = createStackNavigator()

const screenOptions = {
  headerShown: false,
}

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator 
      initialRouteName='HomeScreen'
      screenOptions={screenOptions}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default SignedInStack