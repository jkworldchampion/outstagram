import React, { Component, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { SignedInStack, SignedOutStack } from './screens/navigation'
import { onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from '../outstagram/firebase'


const AuthNavigation = () => {
  const [ currentUser, setCurrentUser ] = useState(null)
  
  const userHandler = user => 
  user ? setCurrentUser(user) : setCurrentUser(null)
  
  const auth = FIREBASE_AUTH;
  useEffect(
    () => onAuthStateChanged(auth, (user) => {
      if (user) {
        userHandler(user)
      } else {

      }
    }),
    []
  )
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack /> }</>
  // return <SignedOutStack />
}

export default AuthNavigation