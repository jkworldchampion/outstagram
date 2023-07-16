import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'
import HomeScreen from './HomeScreen'
import NewPostScreen from './NewPostScreen'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'

const Stack = createStackNavigator()

const screenOptions = {
  headerShown: false,
}

export const SignedInStack = () => (
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

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='LoginScreen'
      screenOptions={screenOptions}
    >
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='SignupScreen' component={SignupScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)